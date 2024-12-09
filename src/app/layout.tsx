import { Metadata } from 'next';
import { defaultSEO } from '@/config/seo';
import { ThemeProvider } from '../context/ThemeContext';
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from '@/components/layout/footer/Footer';
import { TransitionProvider } from '@/context/TransitionContext';
import PageTransition from "@/components/PageTransition";
import "./globals.css"
import { DarkSectionProvider } from '@/context/DarkSectionContext';

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
      </body>
    </html>
  );
}
