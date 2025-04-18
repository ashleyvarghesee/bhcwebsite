'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Team" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden w-screen max-w-[100vw]">
      <header className="sticky top-0 h-16 w-full z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        {/* Mobile menu button */}
        <div className="md:hidden absolute top-5 right-4 z-50">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex h-full justify-center items-center px-4">
          <div className="flex items-center space-x-1 lg:space-x-4">
            {navLinks.slice(0, 2).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-1 text-sm font-medium ${isActive ? 'text-[#3b82f6]' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/" className="mx-1 lg:mx-3 flex-shrink-0">
              <div className="relative h-10 w-10">
                <Image
                  src="/bear-logo.png"
                  alt="Bruin Health Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {navLinks.slice(2).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-1 text-sm font-medium ${isActive ? 'text-[#3b82f6]' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center`}
        >
          <div className="flex flex-col items-center space-y-6">
            <Link href="/" onClick={() => setMenuOpen(false)} className="mb-4">
              <div className="relative h-16 w-16">
                <Image
                  src="/bear-logo.png"
                  alt="Bruin Health Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </Link>
            
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium ${isActive ? 'text-[#3b82f6]' : 'text-[#0a192f]'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <main className="flex-grow w-full">
        {children}
      </main>

      <footer className="py-6 border-t border-[#3b82f6]/20 bg-white w-full">
        <div className="px-4 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/bear-logo.png"
                alt="Bruin Health Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            
            <p className="text-xs text-gray-700 mb-4 md:mb-0 text-center md:text-left">
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