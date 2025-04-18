'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/members", label: "Team" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact Us" },
    { href: "/apply", label: "Apply" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="absolute h-20 w-full z-50 font-raleway">
        <nav className="container mx-auto h-full px-6 flex justify-between items-center">
          <div className="flex-1"></div>

          <div className="flex gap-10 items-center flex-shrink-0">
            {navLinks.slice(0, 3).map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap font-extrabold uppercase tracking-widest text-base ${isActive ? 'text-[#3b82f6]' : pathname === '/' ? 'text-white hover:text-white/80' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link href="/" className="block mx-6">
              <div className="relative h-14 w-14">
                <Image
                  src="/bear-logo.png"
                  alt="Bruin Health Consulting Logo"
                  fill
                  sizes="56px"
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
                  className={`transition-colors whitespace-nowrap font-extrabold uppercase tracking-widest text-base ${isActive ? 'text-[#3b82f6]' : pathname === '/' ? 'text-white hover:text-white/80' : 'text-[#0a192f] hover:text-[#1d4ed8]'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex-1"></div>
        </nav>
      </header>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="py-8 border-t border-[#3b82f6]/20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/bear-logo.png"
                alt="Bruin Health Consulting Logo"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>
            
            <p className="text-sm text-gray-700 mb-6 md:mb-0">
              © 2025 Bruin Health Consulting. All Rights Reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/bruinhealthconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#3b82f6] transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:ganesh.venumbaka@gmail.com"
                className="text-gray-700 hover:text-[#3b82f6] transition-colors"
              >
                <MdEmail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 