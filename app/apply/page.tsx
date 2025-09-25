"use client";

import Link from "next/link";
import { FaCalendarAlt, FaLightbulb, FaUsers } from "react-icons/fa";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background image container */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/images/skyline.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.3,
          filter: 'blur(2px)',
          zIndex: 0
        }}
      ></div>
      
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Coming Soon Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Applications Open Now
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We&apos;re excited to welcome new members to our team. Applications for the fall are open now.
            </p>
          </div>
          
          {/* Announcement Box */}
          <div className="bg-gray-900/90 backdrop-blur-sm shadow-lg rounded-xl border border-white/10 p-10 mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 rounded-full flex items-center justify-center shadow-md">
                <FaCalendarAlt className="text-yellow-400 text-3xl" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">BHC is Recruiting!</h2>
            <p className="text-gray-300 max-w-lg mx-auto text-lg leading-relaxed mb-6">
              BHC is recruiting new members for fall consulting projects with biotech and biomedical companies. We're looking for students interested in business/tech consulting.
            </p>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScvCdIY3avpmh7ACdzWA7icotPbuLFzXMMvadV5eez5EHtVcA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors rounded-md text-lg font-medium"
            >
              Apply Now
            </Link>
          </div>
          
          {/* Additional Information */}
          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-white mb-6">Interested in Learning More?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
              If you're still interested in learning more, check out our team page and contact us!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <FaUsers className="text-yellow-400" />
                  </div>
                </div>
                <h4 className="font-medium text-white mb-2">Our Team</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Meet the talented consultants who make up Bruin Health Consulting.
                </p>
                <Link 
                  href="/members" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors rounded-md text-sm"
                >
                  Meet Our Team
                </Link>
              </div>
              
              <div className="bg-gray-900/90 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <FaLightbulb className="text-yellow-400" />
                  </div>
                </div>
                <h4 className="font-medium text-white mb-2">Contact Us</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Learn about our organization&apos;s impact in healthcare consulting.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors rounded-md text-sm"
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