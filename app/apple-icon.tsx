import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), 'public/fonts/cormorant-600.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #06141B 0%, #0E2429 100%)',
          borderRadius: 36,
          gap: 4,
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 80,
            fontWeight: 600,
            color: '#2D8B75',
            lineHeight: 1,
          }}
        >
          K
        </span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: 'rgba(244,237,228,0.35)',
            textTransform: 'uppercase' as const,
          }}
        >
          KAWI
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: fontData,
          style: 'normal',
          weight: 600,
        },
      ],
    }
  )
}
