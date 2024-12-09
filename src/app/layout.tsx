import Footer from '@/components/layout/footer/Footer'
import Navigation from "@/components/layout/navigation/Navigation"
import PageTransition from "@/components/PageTransition"
import { defaultSEO } from '@/config/seo'
import { DarkSectionProvider } from '@/context/DarkSectionContext'
import { TransitionProvider } from '@/context/TransitionContext'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import { ThemeProvider } from '../context/ThemeContext'
import "./globals.css"

export const metadata: Metadata = {
  ...defaultSEO,
  metadataBase: new URL('https://ocupop.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Ocupop",
              "description": "We are a digital creative agency specializing in design, development, and strategy.",
              "url": "https://ocupop.com",
              "logo": "https://ocupop.com/images/ocupop-logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Milwaukee",
                "addressRegion": "WI",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "m@ocupop.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ocupop",
                "https://twitter.com/ocupop",
                "https://www.instagram.com/ocupop"
              ]
            })
          }}
        />
      </head>
      <body className={`theme-transition`}>
        <ThemeProvider>
          <DarkSectionProvider>
            <TransitionProvider>
              <Navigation />
              <PageTransition />
              <main className="pt-20 relative">
                {children}
              </main>
              <Footer />
            </TransitionProvider>
          </DarkSectionProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-TBTWG6ZXWZ" />
      </body>
    </html>
  );
}
