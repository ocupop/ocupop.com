'use client';

import Link from 'next/link';
import Image from '@/components/base/Image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const locations = ['Whistler', 'Milwaukee', 'Savanah'];
  const [currentLocation, setCurrentLocation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => (prev + 1) % locations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-end">
          <div className="flex flex-col space-y-16 lg:py-8  lg:pr-28 lg:border-r-2 border-[#4A4A4A]">
            <div>
              <p className="text-lg font-sans mb-2">Working from</p>
              <div className="h-[2rem] relative ">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={locations[currentLocation]}
                    className="text-lg absolute font-sans uppercase"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    {locations[currentLocation]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
            <nav className="mb-8 lg:mb-0">
              <ul className="space-y-4 text-xl">
                <li><Link className='font-sans uppercase hover:opacity-50 transition' href="/work">Work</Link></li>
                <li><Link className='font-sans uppercase hover:opacity-50 transition' href="/services">Services</Link></li>
                <li><Link className='font-sans uppercase hover:opacity-50 transition' href="/about">About</Link></li>
                <li><Link className='font-sans uppercase hover:opacity-50 transition' href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="mb-8 lg:mb-0">
              <ul className="space-y-4">
                <li><Link className='text-lg font-sans uppercase hover:opacity-50 transition' href="https://instagram.com/ocupop">INSTAGRAM</Link></li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col flex-1 lg:pl-28'>
            <div className='flex items-start justify-start'>
              <Image
                image="/assets/ocupop/ocupop-logo-wordmark.svg"
                alt="Ocupop wordmark"
                max_width={500}
                className="my-16"
              />
            </div>
            <div className="md:grid md:grid-cols-2 space-y-2">
              <div className="mb-8 lg:mb-0">
                <p className='font-sans text-lg'>Ocupop © {currentYear}</p>
                <p className='font-sans text-lg' >All of the rights are reserved.</p>

              </div>
              <div className="space-x-4 flex flex-col items-end space-y-2">
                <Link className='font-sans text-lg hover:opacity-50 transition' href="/terms">sayshityeah.com</Link>
                <Link className='font-sans text-lg hover:opacity-50 transition' href="/privacy">sayfuckno.com</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
