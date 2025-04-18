"use client";

import Link from "next/link";
import { FaCalendarAlt, FaLightbulb, FaUsers } from "react-icons/fa";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Coming Soon Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-2">
              Applications Opening Soon
            </h1>
            <div className="w-20 h-1 bg-[#1d4ed8] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We&apos;re excited to welcome new members to our team. Applications for the upcoming cycle will open soon.
            </p>
          </div>
          
          {/* Announcement Box */}
          <div className="bg-white shadow-lg rounded-xl border border-[#3b82f6]/10 p-10 mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-full flex items-center justify-center shadow-md">
                <FaCalendarAlt className="text-[#1d4ed8] text-3xl" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-4">Coming Fall 2025</h2>
            <p className="text-gray-600 max-w-lg mx-auto text-lg leading-relaxed">
              We&apos;re preparing to open applications for new members to join Bruin Health Consulting. Stay tuned for more information about the application process and requirements.
            </p>
          </div>
          
          {/* Additional Information */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-[#0a192f] mb-6">Interested in Learning More?</h3>
            <p className="text-gray-600 mb-8 text-lg max-w-xl mx-auto">
              While applications aren&apos;t open yet, you can still explore our website to learn about our team and the work we do.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#f8fafc] p-6 rounded-lg border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center">
                    <FaUsers className="text-[#1d4ed8]" />
                  </div>
                </div>
                <h4 className="font-medium text-[#0a192f] mb-2">Our Team</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Meet the talented consultants who make up Bruin Health Consulting.
                </p>
                <Link 
                  href="/members" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors rounded-md text-sm"
                >
                  Meet Our Team
                </Link>
              </div>
              
              <div className="bg-[#f8fafc] p-6 rounded-lg border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#dbeafe] rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-[#1d4ed8]" />
                  </div>
                </div>
                <h4 className="font-medium text-[#0a192f] mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about our organization&apos;s impact in healthcare consulting.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1d4ed8] text-white hover:bg-[#1e40af] transition-colors rounded-md text-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 