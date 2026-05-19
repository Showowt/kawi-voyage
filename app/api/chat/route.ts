import Anthropic from '@anthropic-ai/sdk'
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/kawi-data'

const anthropic = new Anthropic()

export async function POST(req: Request) {
  const { messages } = await req.json()

  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = await anthropic.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 800,
          system: CHATBOT_SYSTEM_PROMPT,
          stream: true,
          messages: messages.map((m: { role: string; content: string }) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
          })),
        })

        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }
      } catch {
        controller.enqueue(
          encoder.encode(
            "I'm having a moment \u2014 please WhatsApp Sophie directly at +(507) 6555 9954 \uD83C\uDF34"
          )
        )
      }
      controller.close()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
