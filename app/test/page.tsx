"use client";

import Image from "next/image";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4">Test 1: Direct img tag</h2>
        <img 
          src="/images/DS5A0014.JPG" 
          alt="Team Image" 
          width={400} 
          height={300}
          className="rounded-lg"
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl mb-4">Test 2: Try image with different capitalization</h2>
        <img 
          src="/images/ds5a0014.jpg" 
          alt="Team Image (lowercase)" 
          width={400} 
          height={300}
          className="rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-4">Test 3: As CSS background</h2>
        <div 
          style={{
            width: "400px",
            height: "300px",
            backgroundImage: "url('/images/DS5A0014.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0.5rem"
          }}
        ></div>
      </div>

      <a 
        href="/"
        className="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
      >
        Back to Home
      </a>
    </div>
  );
} 