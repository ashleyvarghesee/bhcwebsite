"use client";

import Link from "next/link";
import { FaArrowRight, FaStethoscope, FaHeartbeat, FaHospital, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState({
    projects: 0,
    members: 0,
    satisfaction: 0
  });
  const companies = [
    { name: "Amazon", logo: "/logos/Amazon_logo.svg" },
    { name: "JPMorgan", logo: "/logos/TyKPrJ01.svg" },
    { name: "NASA", logo: "/logos/NASA_logo.svg" },
    { name: "Cisco", logo: "/logos/cisco.svg" },
    { name: "Johns Hopkins", logo: "/logos/johnshopkins.svg" },
    { name: "UCLA Geffen", logo: "/logos/ucla_geffen.svg" },
    { name: "Wells Fargo", logo: "/logos/wells_fargo.svg" },
    { name: "Lawrence Berkeley National Lab", logo: "/logos/lbnl.svg" },
    { name: "Berkeley HAAS", logo: "/logos/berkeley_haas.svg" },
    { name: "Cambridge", logo: "/logos/cambridge.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "LAFD", logo: "/logos/lafd.svg" },
    { name: "Boeing", logo: "/logos/boeing.svg" },
    { name: "LASD", logo: "/logos/lasd.svg" },
    { name: "Kumon", logo: "/logos/kumon.svg" },
    { name: "Cedars Sinai", logo: "/logos/cedars_sinai.svg" }
  ];

  // Duplicate the companies array
  const scrollingCompanies = [...companies, ...companies];

  useEffect(() => {
    // Stats animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            const duration = 2000; // 2 seconds
            const steps = 60;
            const projectsIncrement = 4 / steps;
            const membersIncrement = 20 / steps;
            const satisfactionIncrement = 100 / steps;

            let currentStep = 0;
            const interval = setInterval(() => {
              currentStep++;
              setCounts({
                projects: Math.min(4, Math.round(projectsIncrement * currentStep)),
                members: Math.min(20, Math.round(membersIncrement * currentStep)),
                satisfaction: Math.min(100, Math.round(satisfactionIncrement * currentStep))
              });

              if (currentStep >= steps) {
                clearInterval(interval);
              }
            }, duration / steps);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Fallback background color
  const bgStyle = {
    backgroundColor: '#ffffff'
  };

  return (
    <main className="min-h-screen" style={bgStyle}>
      {/* Background image container */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url('/images/DS5A0014.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
          filter: 'blur(4px)',
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
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 text-white">
        {/* Hero section - reducing height to less than full screen */}
        <div className="h-[85vh] flex items-center justify-center">
          <div className="text-center px-4 -mt-28">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider leading-tight">
              BRUIN HEALTH CONSULTING
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto italic font-light leading-tight whitespace-nowrap overflow-hidden text-ellipsis px-2">
              UCLA&apos;s first and foremost student-run healthcare consulting organization.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto italic font-light mt-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis px-2">
              Committed to excellence, driven by impact.
            </p>
          </div>
        </div>

        {/* Stats section - now appears higher on the page */}
        <div className="relative py-8 md:py-12 bg-gray-100" ref={statsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1d4ed8] mb-2">{counts.projects}</div>
                <p className="text-gray-800 text-base uppercase tracking-wider">Healthcare Projects</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1d4ed8] mb-2">{counts.members}</div>
                <p className="text-gray-800 text-base uppercase tracking-wider">Healthcare Professionals</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1d4ed8] mb-2">{counts.satisfaction}%</div>
                <p className="text-gray-800 text-base uppercase tracking-wider">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* What We Do section */}
        <div className="relative py-12 md:py-14 pb-4 bg-white overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-24 left-24 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-[#0a192f] mb-4">What We Do</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our organization trains new members and has a robust program to make sure every member is well equipped to assist in projects and contribute to BHC&apos;s greater goals as a consulting club.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We offer career advice and resume building workshops that are open to all UCLA students with the purpose of educating the school community on the various professions and pathways people can take into business and medicine.
                </p>
                <Link
                  href="/join"
                  className="group inline-flex items-center gap-2 bg-[#1d4ed8] text-white px-6 py-3 rounded-lg hover:bg-[#1e40af] transition-all duration-300"
                >
                  Learn How to Join
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="animate-fade-in-up delay-200">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
        <Image
                      src="/images/DS5A0014.JPG"
                      alt="Bruin Health Consulting Team"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features section - horizontal minimal design */}
        <div className="relative pt-8 pb-16 bg-white overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-all hover:scale-110 hover:rotate-3">
                  <FaStethoscope className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f]">Healthcare Focus</h3>
                <div className="w-10 h-1 bg-blue-200 mx-auto my-2"></div>
                <p className="text-gray-700">BHC&apos;s first consulting organization solely focused on elevating groups from all aspects of the healthcare sector.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-all hover:scale-110 hover:rotate-3">
                  <FaHeartbeat className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f]">Diverse Clients</h3>
                <div className="w-10 h-1 bg-blue-200 mx-auto my-2"></div>
                <p className="text-gray-700">We work with ambulance companies, independent nursing facilities, hospitals, pharmaceutical companies, clinical research labs and more.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 shadow-lg transform transition-all hover:scale-110 hover:rotate-3">
                  <FaHospital className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0a192f]">Real Experience</h3>
                <div className="w-10 h-1 bg-blue-200 mx-auto my-2"></div>
                <p className="text-gray-700">Our unique, project-based approach to consulting ensures that members get real-world experience and learn technical and business skills through their time at BHC.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners section */}
        <div className="relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute -top-40 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000 z-10"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000 z-10"></div>
          
          <div className="w-full relative" style={{ maxHeight: "500px", overflow: "hidden" }}>
            <Image 
              src="/images/Screenshot 2025-04-17 151656.png" 
              alt="Companies Background"
              width={1920}
              height={500}
              className="w-full h-auto object-contain object-top"
              style={{ maxHeight: "500px" }}
            />
            <div className="absolute inset-0 bg-white/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0a192f] mb-4 md:mb-6">
                  WHERE WE <span className="text-[#1d4ed8]">GO</span><span className="text-[#1d4ed8]">.</span>
                </h2>
                <a 
                  href="mailto:bruinhealthconsulting@gmail.com" 
                  className="inline-flex items-center gap-2 text-[#1d4ed8] hover:text-[#1e40af] transition-colors mt-4"
                  aria-label="Email us"
                >
                  <FaEnvelope className="text-2xl" />
                  <span className="text-lg font-medium">Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
    </main>
  );
}
