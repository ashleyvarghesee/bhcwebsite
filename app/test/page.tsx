"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/images/DS5A0014.JPG"
            alt="Test Image 1"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="mt-8 relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src="/images/DS5A0232 (2).JPEG"
            alt="Test Image 2"
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 