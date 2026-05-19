import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Kawi Voyage — A Place for Friends in Bocas del Toro, Panama'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  const cormorantData = await readFile(
    join(process.cwd(), 'public/fonts/cormorant-600.ttf')
  )
  const dmSansData = await readFile(
    join(process.cwd(), 'public/fonts/dm-sans-400.ttf')
  )
  const bgImage = await readFile(join(process.cwd(), 'public/og-bg.jpg'))
  const bgBase64 = `data:image/jpeg;base64,${bgImage.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#06141B',
        }}
      >
        {/* Background photo */}
        <img
          src={bgBase64}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(180deg, rgba(6,20,27,0.75) 0%, rgba(6,20,27,0.5) 30%, rgba(6,20,27,0.5) 60%, rgba(6,20,27,0.85) 100%)',
          }}
        />

        {/* Emerald accent glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(45,139,117,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
            gap: 0,
          }}
        >
          {/* Top decorative line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 50,
                height: 1,
                background: 'rgba(45,139,117,0.6)',
              }}
            />
            <span
              style={{
                fontFamily: 'DM Sans',
                fontSize: 13,
                letterSpacing: 5,
                textTransform: 'uppercase' as const,
                color: '#2D8B75',
              }}
            >
              BOCAS DEL TORO &middot; PANAMA
            </span>
            <div
              style={{
                width: 50,
                height: 1,
                background: 'rgba(45,139,117,0.6)',
              }}
            />
          </div>

          {/* Brand Name */}
          <div
            style={{
              display: 'flex',
              fontFamily: 'Cormorant Garamond',
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: 12,
              color: '#F4EDE4',
              marginBottom: 12,
            }}
          >
            <span style={{ color: '#2D8B75' }}>K</span>
            <span>AWI</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              color: '#F4EDE4',
              marginBottom: 6,
              display: 'flex',
            }}
          >
            A Place for{' '}
          </div>
          <div
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 76,
              fontWeight: 600,
              fontStyle: 'italic',
              lineHeight: 1.05,
              color: '#2D8B75',
              marginBottom: 32,
              display: 'flex',
            }}
          >
            Friends
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: 'DM Sans',
              fontSize: 20,
              color: 'rgba(244,237,228,0.55)',
              letterSpacing: 0.5,
              lineHeight: 1.6,
              maxWidth: 600,
              display: 'flex',
            }}
          >
            Authentic eco-tours &middot; Trilingual guides &middot; Community
            partnerships
          </div>

          {/* Bottom accent line */}
          <div
            style={{
              width: 60,
              height: 2,
              background: '#2D8B75',
              marginTop: 36,
              borderRadius: 1,
            }}
          />

          {/* URL */}
          <div
            style={{
              fontFamily: 'DM Sans',
              fontSize: 14,
              color: 'rgba(244,237,228,0.3)',
              letterSpacing: 3,
              textTransform: 'uppercase' as const,
              marginTop: 20,
              display: 'flex',
            }}
          >
            kawivoyage.com
          </div>
        </div>

        {/* Powered by badge - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 28,
            fontFamily: 'DM Sans',
            fontSize: 11,
            color: 'rgba(244,237,228,0.15)',
            letterSpacing: 1,
            display: 'flex',
          }}
        >
          Powered by MachineMind
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: cormorantData,
          style: 'normal',
          weight: 600,
        },
        {
          name: 'DM Sans',
          data: dmSansData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
