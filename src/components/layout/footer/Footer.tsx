import Link from 'next/link';
import Image from 'next/image';
import footerData from '@/data/footer.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          {/* Left Column */}
          <div className="mb-8 lg:mb-0">
            <p className="text-lg mb-2">Working from</p>
            <p className="text-2xl">WHISTLER</p>
          </div>

          {/* Middle Column - Navigation */}
          <nav className="mb-8 lg:mb-0">
            <ul className="space-y-4 text-xl">
              <li><Link href="/work">WORK</Link></li>
              <li><Link href="/services">SERVICES</Link></li>
              <li><Link href="/about">ABOUT</Link></li>
              <li><Link href="/contact">CONTACT</Link></li>
            </ul>
          </nav>

          {/* Right Column - Logo */}
          <div>
            <Image
              src="/assets/ocupop/ocupop-logo-white.svg"
              alt="Ocupop"
              width={300}
              height={80}
              className="mb-4"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start pt-8 border-t border-white/20">
          {/* Social Links */}
          <div className="mb-8 lg:mb-0">
            <ul className="space-y-4">
              <li><Link href="https://instagram.com/ocupop">INSTAGRAM</Link></li>
              <li><Link href="https://jokestation.com">JOKESTATION</Link></li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="mb-8 lg:mb-0">
            <p>Ocupop © {currentYear}</p>
            <p>All of the rights are reserved.</p>
          </div>

          {/* Additional Links */}
          <div className="space-x-4">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
