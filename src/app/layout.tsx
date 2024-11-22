
import Navigation from "@/components/layout/navigation/Navigation";
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
      <body>
        <TransitionProvider>
          <Navigation />
          <PageTransition />
          <main className="pt-20">
            {children}
          </main>
        </TransitionProvider>
      </body>
    </html>
  );
}
