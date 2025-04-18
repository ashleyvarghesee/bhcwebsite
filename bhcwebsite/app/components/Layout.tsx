import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Bruin Health Consulting"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">About</Link>
            <Link href="/members" className="hover:text-blue-600">Our Members</Link>
            <Link href="/clients" className="hover:text-blue-600">For Clients</Link>
            <Link href="/students" className="hover:text-blue-600">For Students</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2025 Bruin Health Consulting. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bruinhealthconsulting/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:ganesh.venumbaka@gmail.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <MdEmail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
} 