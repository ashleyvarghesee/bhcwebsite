'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Team" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact Us" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full">
      <header className="fixed w-full z-50 bg-transparent">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center px-4 h-16">
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
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20">
            <div className="flex flex-col py-2">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-4 font-semibold ${isActive ? 'text-[#3b82f6]' : 'text-[#0a192f]'}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex container mx-auto h-20 px-4 justify-between items-center">
          <div className="flex-1 min-w-0"></div>

          <div className="flex items-center justify-center space-x-3 lg:space-x-6">
            {navLinks.slice(0, 3).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm lg:text-base whitespace-nowrap font-bold uppercase tracking-wide ${isActive ? 'text-[#3b82f6]' : pathname === '/' ? 'text-white hover:text-white/80' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/" className="mx-3 lg:mx-4 flex-shrink-0">
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
                  className={`transition-colors text-sm lg:text-base whitespace-nowrap font-bold uppercase tracking-wide ${isActive ? 'text-[#3b82f6]' : pathname === '/' ? 'text-white hover:text-white/80' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
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

      <footer className="py-6 md:py-8 border-t border-[#3b82f6]/20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/bear-logo.png"
                alt="Bruin Health Consulting Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            
            <p className="text-xs md:text-sm text-gray-700 mb-4 md:mb-0 text-center md:text-left">
              © 2025 Bruin Health Consulting. All Rights Reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bruinhealthconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#3b82f6] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:ganesh.venumbaka@gmail.com"
                className="text-gray-700 hover:text-[#3b82f6] transition-colors"
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