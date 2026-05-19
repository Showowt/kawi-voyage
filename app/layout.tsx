import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kawi-voyage.vercel.app'),
  title: {
    default: 'Kawi Voyage | A Place for Friends in Panama',
    template: '%s | Kawi Voyage',
  },
  description:
    'Authentic eco-tours and concierge experiences in Bocas del Toro, Panama. Trilingual guides (EN/ES/FR), Ngabe community partnerships, and the Caribbean you dream of. Plan your trip with Sophie\u2019s AI concierge.',
  keywords: [
    'Bocas del Toro tours',
    'Panama eco-tourism',
    'Kawi Voyage',
    'Caribbean tours Panama',
    'Bocas del Toro snorkeling',
    'bioluminescence tour Panama',
    'Zapatilla island tour',
    'eco-friendly travel Panama',
    'trilingual tour guide Panama',
    'Bocas del Toro activities',
    'Panama travel concierge',
  ],
  authors: [{ name: 'Kawi Voyage SA' }],
  creator: 'Kawi Voyage',
  publisher: 'Kawi Voyage SA',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_PA', 'fr_FR'],
    url: 'https://kawi-voyage.vercel.app',
    siteName: 'Kawi Voyage',
    title: 'Kawi Voyage \u2014 A Place for Friends',
    description:
      'Your local friend in Panama\u2019s Caribbean. Authentic eco-tours in Bocas del Toro with trilingual guides, community partnerships, and a deep respect for the ocean.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kawi Voyage \u2014 A Place for Friends',
    description:
      'Authentic eco-tours in Bocas del Toro, Panama. Trilingual guides, community partnerships, and the Caribbean you dream of.',
    creator: '@kawivoyagetours',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    'og:phone_number': '+(507) 6555 9954',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#06141B" />
        <meta name="msapplication-TileColor" content="#06141B" />
      </head>
      <body>{children}</body>
    </html>
  )
}
