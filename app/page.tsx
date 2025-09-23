"use client";

import Link from "next/link";
import { FaArrowRight, FaStethoscope, FaHospital, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section - Aviato Style with Dark Theme and Background Image */}
      <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
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
            backgroundPosition: 'center',
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              BRUIN HEALTH CONSULTING
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              UCLA's premier student-run consulting organization specializing in healthcare and technology.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Committed to excellence, driven by impact.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/apply"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Join Our Team
              </Link>
              <Link
                href="/contact"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400/10 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* What is BHC Section */}
      <section className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                What is Bruin Health Consulting?
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
                UCLA's premier student-run consulting organization specializing in healthcare and technology.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                BHC partners with healthcare organizations, biotech companies, and health tech startups to deliver strategic consulting services. Our team works on real-world projects ranging from healthcare operations optimization to digital health implementation, providing members with hands-on experience in both healthcare and technology consulting.
              </p>
              <Link
                href="/apply"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
              >
                Learn How to Join
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/DS5A0014.JPG"
                  alt="Bruin Health Consulting Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/IMG_1240.JPG"
                alt="BHC Team Activity"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/IMG_0531 (1).JPG"
                alt="BHC Team Meeting"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/IMG_3046 (1).jpg"
                alt="BHC Consulting Work"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/IMG_7390 (1).JPG"
                alt="BHC Team Collaboration"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStethoscope className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare Focus</h3>
              <p className="text-gray-400">BHC's first consulting organization solely focused on elevating groups from all aspects of the healthcare sector.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHospital className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Diverse Clients</h3>
              <p className="text-gray-400">We work with hospitals, pharmaceutical companies, biotech firms, health tech startups, and clinical research organizations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real Experience</h3>
              <p className="text-gray-400">Our project-based approach ensures members gain real-world experience in healthcare and technology consulting.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section with Companies Banner */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/Screenshot 2025-04-17 151656.png" 
            alt="Companies We Work With"
            width={1920}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to make an impact in healthcare and technology?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/apply"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
          
          <p className="text-xl text-white">
            Connect with UCLA's premier healthcare and technology consulting organization.
          </p>
        </div>
      </section>
    </main>
  );
}
