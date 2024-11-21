
import Navigation from "@/components/Navigation";
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
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
