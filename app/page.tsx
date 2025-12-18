"use client";

import Link from "next/link";
import { FaArrowRight, FaStethoscope, FaHospital, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen bg-black">
      {/* Combined hero + clients with shared background */}
      <section className="relative overflow-hidden">
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('/images/uclanight.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            opacity: 0.90,
            filter: 'blur(0.5px) saturate(0.8) grayscale(0.1) brightness(0.95)',
            zIndex: 0
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1
          }}
        ></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-10 lg:py-12 min-h-[55vh] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center">
                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                  BRUIN HEALTH CONSULTING
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl lg:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                  UCLA's premier student-run consulting organization specializing in healthcare and technology.
                </p>
                
                {/* CTA Text Links */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 text-xl sm:text-2xl font-semibold text-white/90 tracking-tight">
                  <Link
                    href="/apply"
                    className="relative inline-block transition duration-300 ease-out hover:text-yellow-200 after:content-[''] after:absolute after:inset-0 after:bg-yellow-200/15 after:rounded-md after:opacity-0 after:scale-95 after:blur-[1px] after:transition-all after:duration-300 after:ease-out hover:after:opacity-100 hover:after:scale-100"
                  >
                    Join Our Team
                  </Link>
                  <span className="hidden sm:block text-white/60">•</span>
                  <Link
                    href="/contact"
                    className="relative inline-block transition duration-300 ease-out hover:text-blue-200 after:content-[''] after:absolute after:inset-0 after:bg-blue-200/15 after:rounded-md after:opacity-0 after:scale-95 after:blur-[1px] after:transition-all after:duration-300 after:ease-out hover:after:opacity-100 hover:after:scale-100"
                  >
                    Connect With Us
                  </Link>
                </div>
                
              </div>
            </div>
          </section>

          {/* Client Slider Section */}
          <section className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Who We've Worked With
                </h2>
              </div>
              
              {/* Logo Carousel */}
              <div className="relative overflow-hidden">
                <div className="flex animate-scroll space-x-16">
              <div className="flex-shrink-0">
                <img 
                  src="/images/Logo_Hoag.png" 
                  alt="Hoag" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/OV_UCLA_Home-Logo.png" 
                  alt="Olive View UCLA" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/image2vector (4).svg" 
                  alt="Client Logo" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/image2vector (5).svg" 
                  alt="Client Logo" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/stanford-university-logo.png" 
                  alt="Stanford University" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/OV_UCLA_Home-Logo.png" 
                  alt="Olive View UCLA" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/image2vector (4).svg" 
                  alt="Client Logo" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/image2vector (5).svg" 
                  alt="Client Logo" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/images/Logo_Hoag.png" 
                  alt="Hoag" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/logos/stanford-university-logo.png" 
                  alt="Stanford University" 
                  className="h-10 w-auto opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <p className="text-xl lg:text-2xl text-white mb-6 leading-relaxed">
                UCLA's premier student-run consulting organization specializing in healthcare and technology.
              </p>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Bruin Health Consulting (BHC) is the founding chapter of the Collegiate Health Consulting Alliance, a nationwide group of university clubs that works with healthcare organizations and biotech companies to deliver strategic and technical consulting services. BHC partners with healthcare organizations, biotech companies, and health tech startups to deliver strategic consulting services. Our team works on real-world projects ranging from healthcare operations optimization to digital health implementation, providing members with hands-on experience in both healthcare and technology consulting.
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
                src="/images/IMG_6451.JPG"
                alt="BHC Team Meeting"
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/DSCF1546.jpg"
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
              <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStethoscope className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Healthcare Focus</h3>
              <p className="text-white">BHC's first consulting organization solely focused on elevating groups from all aspects of the healthcare sector.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHospital className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Diverse Clients</h3>
              <p className="text-white">We work with hospitals, pharmaceutical companies, biotech firms, health tech startups, and clinical research organizations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real Experience</h3>
              <p className="text-white">Our project-based approach ensures members gain real-world experience in healthcare and technology consulting.</p>
            </div>
          </div>
        </div>
      </section>

      
    
    </main>
  );
}
