import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kawi Voyage | Your Friend in Panama',
  description: 'Authentic eco-tours and concierge experiences in Bocas del Toro, Panama. Trilingual guides, community partnerships, and the Caribbean you dream of.',
  keywords: 'Bocas del Toro, Panama tours, eco-tourism, Caribbean, Kawi Voyage, Bocas tours, Panama travel',
  openGraph: {
    title: 'Kawi Voyage | A Place for Friends',
    description: 'Your local friend in Panama\'s Caribbean. Authentic eco-tours in Bocas del Toro.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
