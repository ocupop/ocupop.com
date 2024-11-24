
import { ThemeProvider } from '../context/ThemeContext';
import Navigation from "@/components/layout/navigation/Navigation";
import Footer from '@/components/layout/footer/Footer';
import { TransitionProvider } from '@/context/TransitionContext';
import PageTransition from "@/components/PageTransition";
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={`theme-transition`}>
        <TransitionProvider>
          <Navigation />
          <PageTransition />
          <main className="pt-20">
            {children}
          </main>
          <Footer />

        </TransitionProvider>
      </body>
      </ThemeProvider>
    </html>
  );
}
