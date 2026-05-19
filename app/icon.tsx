import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default async function Icon() {
  const fontData = await readFile(
    join(process.cwd(), 'public/fonts/cormorant-600.ttf')
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#06141B',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: 22,
            fontWeight: 600,
            color: '#2D8B75',
            marginTop: -1,
          }}
        >
          K
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
