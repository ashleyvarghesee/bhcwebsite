"use client";

import Link from "next/link";
import { FaLaptopMedical, FaChartLine, FaUserMd, FaHandshake } from "react-icons/fa";

const sectors = [
  {
    title: "Healthcare Strategy",
    icon: <FaChartLine className="text-yellow-400 text-4xl mb-4" />,
    description: "We partner with healthcare organizations to navigate complex industry challenges, identify growth opportunities, and develop effective strategic initiatives."
  },
  {
    title: "Healthcare Technology",
    icon: <FaLaptopMedical className="text-yellow-400 text-4xl mb-4" />,
    description: "Our expertise in healthcare technology helps organizations leverage digital solutions, improve data capabilities, and implement innovative tools to enhance care delivery."
  },
  {
    title: "Operations Excellence",
    icon: <FaUserMd className="text-yellow-400 text-4xl mb-4" />,
    description: "We optimize clinical and administrative workflows to enhance efficiency, improve patient experience, and maximize resource utilization in healthcare settings."
  },
  {
    title: "Collaborative Solutions",
    icon: <FaHandshake className="text-yellow-400 text-4xl mb-4" />,
    description: "Our team facilitates partnerships and cross-functional collaborations that strengthen healthcare organizations and expand their capabilities in a rapidly evolving industry."
  }
];

export default function ServicesPage() {
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
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Our Expertise
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Bruin Health Consulting provides diverse solutions tailored to the healthcare sector. Our multidisciplinary team brings expertise from across the healthcare ecosystem to address your unique challenges.
            </p>
          </div>
          
          {/* Expertise Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-start">
                  {sector.icon}
                  <h2 className="text-2xl font-bold text-white mb-3">{sector.title}</h2>
                  <p className="text-gray-300">{sector.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Approach Section */}
          <div className="mt-20 bg-gray-900/90 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Our Approach</h2>
            <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
              We believe in a collaborative approach that combines industry knowledge, analytical rigor, and creative problem-solving to deliver tailored solutions for each client&apos;s unique needs.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0 md:space-x-6">
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Understand</h3>
                <p className="text-gray-300">We start by deeply understanding your organization&apos;s challenges and goals.</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Analyze</h3>
                <p className="text-gray-300">Our team thoroughly analyzes the situation using data-driven methodologies.</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Develop</h3>
                <p className="text-gray-300">We create custom solutions that address your specific needs and opportunities.</p>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-400 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Implement</h3>
                <p className="text-gray-300">We work alongside you to implement solutions and ensure lasting impact.</p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Let&apos;s Discuss Your Healthcare Goals</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with our team to discuss your organization&apos;s needs and discover how Bruin Health Consulting can help you navigate challenges and seize opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition-colors"
            >
              Start the Conversation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 