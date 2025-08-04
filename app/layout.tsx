import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-prei.vercel.app/'),
  title: 'Dev: Abdul Ahad| Full Stack Developer & Entrepreneur',
  description: 'Transforming ideas into digital experiences through code, creativity, and innovation. From full-stack development to no-code solutions, I bridge the gap between imagination and reality.',
  keywords: [
    'Abdul Ahad',
    'Full Stack Developer',
    'Entrepreneur',
    'Freelancer',
    'Next.js',
    'React',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'Software Engineer',
    'Frontend',
    'Backend',
    'No-Code',
    'Low-Code'
  ],
  authors: [{ name: 'Abdul Ahad', url: 'https://github.com/abdulahad-2' }],
  creator: 'Abdul Ahad',
  publisher: 'Abdul Ahad',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  applicationName: 'Dev: Abdul Ahad',
  
  // Open Graph tags
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-prei.vercel.app/', // Update this with your actual domain
    siteName: 'Dev: Abdul Ahad',
    title: 'Dev: Abdul Ahad | Full Stack Developer & Entrepreneur',
    description: 'Transforming ideas into digital experiences through code, creativity, and innovation. From full-stack development to no-code solutions.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Abdul Ahad - Full Stack Developer',
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Dev: Abdul Ahad | Full Stack Developer & Entrepreneur',
    description: 'Transforming ideas into digital experiences through code, creativity, and innovation.',
    creator: '@Abdulahad', 
    images: ['/opengraph-image'],
  },
  
  // Icons and favicon
  icons: {
    icon: '/favicon.ico',
    apple: '/logo/Abdulahad-logo.svg',
    shortcut: '/favicon.ico',
  },
  
  // Additional meta tags
  category: 'technology',
  classification: 'Portfolio Website',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/lauv-logo2.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/lauv-logo2.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00BBFF" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="font-inconsolata" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}