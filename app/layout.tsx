import type { Metadata } from 'next'
import { Geist, Geist_Mono, Red_Rose } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const redRose = Red_Rose({
  variable: '--font-red-rose',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Variable.ttf',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-VariableItalic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
})

export const metadata: Metadata = {
  title: {
    default: 'Teworh - Go Sports, Go Teworh',
    template: '%s | Teworh',
  },

  description:
    'Building facilities, developing entrepreneurs and athletes, empowering communities.',
  keywords: [
    'Teworh',
    'Entrepreneurs',
    'Athletes',
    'Community Development',
    'Facilities',
  ],
  authors: [{ name: 'Teworh Team' }],
  creator: 'Teworh Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${redRose.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
