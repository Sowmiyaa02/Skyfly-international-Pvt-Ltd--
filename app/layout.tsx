import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'SkyFly International | Global Visa Documentation & Immigration Guidance',
  description: 'Professional overseas documentation and global visa guidance consultancy. Expert immigration consultation, travel support, and application assistance worldwide.',
  keywords: 'International visitor visa, Global visa consultancy, Documentation support, Immigration guidance, Overseas travel consultancy, Schengen visa guidance, Worldwide travel support, visa consultation, Trichy',
  openGraph: {
    title: 'SkyFly International | Global Visa Documentation & Immigration Guidance',
    description: 'Professional Overseas Documentation & Global Visa Guidance Consultancy - Expert immigration guidance worldwide.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
