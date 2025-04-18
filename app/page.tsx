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
    <main className="min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      {/* Hero section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background image - using Next.js Image for better performance */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DS5A0014.JPG"
            alt="Bruin Health Consulting Background"
            fill
            priority
            className="object-cover"
            style={{ filter: 'brightness(0.6) blur(2px)' }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero content */}
        <div className="relative h-full z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-wide">
              BRUIN HEALTH CONSULTING
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto italic font-light">
              UCLA&apos;s first and foremost student-run healthcare consulting organization.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto italic font-light mt-2">
              Committed to excellence, driven by impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-8 bg-gray-100 w-full" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-1">{counts.projects}</div>
              <p className="text-gray-800 text-sm uppercase tracking-wider">Healthcare Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-1">{counts.members}</div>
              <p className="text-gray-800 text-sm uppercase tracking-wider">Healthcare Professionals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1d4ed8] mb-1">{counts.satisfaction}%</div>
              <p className="text-gray-800 text-sm uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
        
      {/* What We Do section */}
      <div className="relative py-10 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-32 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a192f] mb-3">What We Do</h3>
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                Our organization trains new members and has a robust program to make sure every member is well equipped to assist in projects and contribute to BHC&apos;s greater goals as a consulting club.
              </p>
              <p className="text-gray-700 mb-5 text-sm sm:text-base">
                We offer career advice and resume building workshops that are open to all UCLA students with the purpose of educating the school community on the various professions and pathways people can take into business and medicine.
              </p>
              <Link
                href="/join"
                className="group inline-flex items-center gap-2 bg-[#1d4ed8] text-white px-4 py-2 rounded-md hover:bg-[#1e40af] transition-all duration-300 text-sm sm:text-base"
              >
                Learn How to Join
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25"></div>
                <div className="relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src="/images/DS5A0014.JPG"
                    alt="Bruin Health Consulting Team"
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section - adjusted for mobile */}
      <div className="relative pt-8 pb-12 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-3 shadow-md hover:scale-105 transition-transform duration-300">
                <FaStethoscope className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">Healthcare Focus</h3>
              <div className="w-8 h-0.5 bg-blue-200 mx-auto my-2"></div>
              <p className="text-gray-700 text-sm px-2">BHC&apos;s first consulting organization solely focused on elevating groups from all aspects of the healthcare sector.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-3 shadow-md hover:scale-105 transition-transform duration-300">
                <FaHeartbeat className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">Diverse Clients</h3>
              <div className="w-8 h-0.5 bg-blue-200 mx-auto my-2"></div>
              <p className="text-gray-700 text-sm px-2">We work with ambulance companies, independent nursing facilities, hospitals, pharmaceutical companies, clinical research labs and more.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-3 shadow-md hover:scale-105 transition-transform duration-300">
                <FaHospital className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f]">Real Experience</h3>
              <div className="w-8 h-0.5 bg-blue-200 mx-auto my-2"></div>
              <p className="text-gray-700 text-sm px-2">Our unique, project-based approach to consulting ensures that members get real-world experience and learn technical and business skills through their time at BHC.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners section - simplified to prevent overflow */}
      <div className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-32 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 z-10"></div>
        <div className="absolute bottom-0 right-16 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 z-10"></div>
        
        <div className="w-full relative py-12" style={{ maxHeight: "400px", minHeight: "250px", overflow: "hidden" }}>
          <div className="absolute inset-0 bg-white/80 z-10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="w-full px-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                WHERE WE <span className="text-[#1d4ed8]">GO</span><span className="text-[#1d4ed8]">.</span>
              </h2>
              <a 
                href="mailto:bruinhealthconsulting@gmail.com" 
                className="inline-flex items-center gap-2 text-[#1d4ed8] hover:text-[#1e40af] transition-colors mt-2"
                aria-label="Email us"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-base font-medium">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
