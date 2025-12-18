'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact Us" },
    { href: "/apply", label: "Apply" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Never hide header at the very top of the page (first 10px)
      if (currentScrollY < 10) {
        setScrollingDown(false);
        return;
      }
      // Only hide when scrolling down
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
      } 
      // Only show header again after scrolling up significantly (20px) or reaching near the top
      else if (lastScrollY - currentScrollY > 20 || currentScrollY < 50) {
        setScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerClasses = `fixed w-full z-50 bg-transparent transition-transform duration-300 ${
    scrollingDown ? '-translate-y-full' : 'translate-y-0'
  }`;

  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden w-full">
      <header className={headerClasses}>
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 h-16 bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <Link href="/" className="flex items-center">
            <Image
              src="/bear-logo.png"
              alt="Bruin Health Consulting Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

            className="focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg z-20 border-b border-gray-800">
            <div className="flex flex-col py-2">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 font-semibold ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex container mx-auto h-20 px-4 justify-between items-center bg-black/95 backdrop-blur-sm border-b border-gray-800">
          <div className="flex-1 min-w-0"></div>

          <div className="flex items-center justify-center space-x-8 lg:space-x-12">
            {navLinks.slice(0, 3).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm lg:text-base whitespace-nowrap font-medium ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/" className="mx-4 lg:mx-6 flex-shrink-0">
              <div className="relative h-12 w-12 lg:h-14 lg:w-14">
                <Image
                  src="/bear-logo.png"
                  alt="Bruin Health Consulting Logo"
                  fill
                  sizes="(max-width: 1024px) 48px, 56px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {navLinks.slice(3).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm lg:text-base whitespace-nowrap font-medium ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex-1 min-w-0"></div>
        </nav>
      </header>

      <main className="flex-grow pt-16 md:pt-20 w-full">
        {children}
      </main>

      <footer className="py-12 md:py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/bear-logo.png"
                  alt="Bruin Health Consulting Logo"
                  width={40}
                  height={40}
                  className="object-contain mr-3"
                />
                <span className="text-white text-xl font-semibold">Bruin Health Consulting</span>
              </div>
              <p className="text-white text-sm max-w-md">
                UCLA's first and foremost student-run healthcare consulting organization. Committed to excellence, driven by impact.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/apply" className="text-white hover:text-yellow-400 transition-colors text-sm">Careers</Link></li>
                <li><Link href="/contact" className="text-white hover:text-yellow-400 transition-colors text-sm">Contact</Link></li>
                <li><a href="https://www.instagram.com/bruinhealthconsulting/" className="text-white hover:text-yellow-400 transition-colors text-sm">Instagram</a></li>
                <li><a href="https://www.linkedin.com/company/bruin-health-consulting/" className="text-white hover:text-yellow-400 transition-colors text-sm">LinkedIn</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">Terms & Conditions</a></li>
                <li><a href="#" className="text-white hover:text-yellow-400 transition-colors text-sm">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4 md:mb-0">
              © 2025 Bruin Health Consulting. All Rights Reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bruinhealthconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:bruinhealthconsulting@gmail.com"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <MdEmail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 