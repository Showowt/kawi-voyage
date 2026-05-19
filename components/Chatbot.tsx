'use client'

import { useState, useRef, useEffect } from 'react'
import { QUICK_REPLIES } from '@/lib/kawi-data'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hola! \uD83C\uDF34 I'm Sophie's AI concierge. I know every tour, every island, every hidden cove in Bocas del Toro. Tell me what you're dreaming of and I'll help you plan the perfect trip.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [isOpen])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMsg = text.trim()
    setInput('')
    setShowSuggestions(false)

    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!res.ok) throw new Error('Failed')

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No reader')

      const decoder = new TextDecoder()
      let fullText = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        fullText += chunk
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: 'assistant', content: fullText }
          return updated
        })
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Connection hiccup! WhatsApp Sophie directly at +(507) 6555 9954 \u2014 she's always happy to help \uD83C\uDF34",
        },
      ])
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className={`chat-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`chat-panel ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-avatar">
            <span>\uD83C\uDF34</span>
            <div className="chat-avatar-pulse" />
          </div>
          <div className="chat-header-info">
            <h4 className="font-display">Kawi Concierge</h4>
            <p>Sophie&apos;s AI &middot; EN / ES / FR</p>
          </div>
          <button className="chat-close-btn" onClick={onClose} aria-label="Close chat">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chat-body" ref={bodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role === 'user' ? 'user' : 'bot'}`}>
              {msg.content}
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className="chat-typing">
              <div className="chat-typing-dot" />
              <div className="chat-typing-dot" />
              <div className="chat-typing-dot" />
            </div>
          )}
        </div>

        {/* Suggestions */}
        {showSuggestions && messages.length <= 2 && (
          <div className="chat-suggestions">
            {QUICK_REPLIES.map((q, i) => (
              <button key={i} className="chat-suggestion" onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-area">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Ask about tours, hotels, itineraries..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          />
          <button
            className="chat-send-btn"
            onClick={() => sendMessage(input)}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            \u2192
          </button>
        </div>

        {/* WhatsApp link */}
        <a
          href="https://wa.me/50765559954"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-wa-link"
        >
          \uD83D\uDCF1 Or WhatsApp Sophie directly
        </a>
      </div>
    </>
  )
}
