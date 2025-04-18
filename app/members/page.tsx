"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMembers = [
  {
    name: "Ganesh Venumbaka",
    role: "President",
    photo: "/images/DS5A8050.jpg",
    bio: "Ganesh is the President of Bruin Health Consulting, focusing on strategic leadership and client relationships.",
    email: "ganesh.venumbaka@gmail.com",
    linkedin: "https://www.linkedin.com/in/ganesh-venumbaka-2739761b2/"
  },
  {
    name: "Nachiappan Muthukumar",
    role: "Internal Vice President",
    photo: "/images/D2F1B6DB-95EF-422C-85F3-1F95BE073415.jpeg", 
    bio: "Nachiappan serves as the Internal Vice President, overseeing internal operations and member development at Bruin Health Consulting.",
    email: "nachivm09@gmail.com",
    linkedin: "https://www.linkedin.com/in/nachi-m/"
  },
  {
    name: "Srivallaba Chintalapati",
    role: "External Vice President",
    photo: "/images/IMG_8261.JPEG", 
    bio: "Srivallaba leads external relations and partnerships as External Vice President for Bruin Health Consulting.",
    email: "csrivallabha@g.ucla.edu",
    linkedin: "https://www.linkedin.com/in/srivallabha-chintalapati-a1a849217/"
  },
  {
    name: "Suhana Agarwal",
    role: "Director of Marketing",
    photo: "/images/DS5A0205.jpeg", 
    bio: "Suhana leads marketing initiatives and brand development at Bruin Health Consulting.",
    email: "imsuhanaagarwal@gmail.com",
    linkedin: "https://www.linkedin.com/in/suhanaagarwal1/"
  },
  {
    name: "Jared Henry",
    role: "Director of Finance",
    photo: "/images/IMG_9968.jpeg", 
    bio: "Jared oversees financial strategy and management for Bruin Health Consulting projects and operations.",
    email: "jhenry2406@g.ucla.edu",
    linkedin: "https://www.linkedin.com/in/jaredhenry/"
  },
  {
    name: "Ashley Varghese",
    role: "Director of Technology",
    photo: "/images/DS5A0232 (2).JPEG", 
    bio: "Ashley leads technology initiatives and digital solutions at Bruin Health Consulting.",
    email: "ashley.varghese8146@gmail.com",
    linkedin: "https://www.linkedin.com/in/ashleyvarghesee/"
  },
  {
    name: "Diya Madhavan",
    role: "Healthcare Consultant",
    photo: "/images/IMG_5015.jpeg", 
    bio: "Diya contributes to Bruin Health Consulting&apos;s mission with her expertise and dedication to healthcare solutions.",
    email: "madhavan.diya@gmail.com",
    linkedin: "https://www.linkedin.com/in/diyamadhavan/"
  },
  {
    name: "Samarth Hedge",
    role: "Healthcare Consultant",
    photo: "/images/IMG_1731.jpg", 
    bio: "Samarth contributes valuable insights and expertise to healthcare projects at Bruin Health Consulting.",
    email: "samarthhegde@g.ucla.edu",
    linkedin: "https://www.linkedin.com/in/samarth-hegde-a099b2260/"
  },
  {
    name: "Sankeerth Gandhari",
    role: "Healthcare Consultant",
    photo: "/images/image0.jpeg", 
    bio: "Sankeerth brings dedicated expertise to Bruin Health Consulting&apos;s healthcare initiatives and client projects.",
    email: "sunnyg83@g.ucla.edu",
    linkedin: "https://www.linkedin.com/in/sankeerthgandhari/"
  },
  {
    name: "Rishvik Kambhampati",
    role: "Healthcare Consultant",
    photo: "/images/DSC06887.jpg", 
    bio: "Rishvik contributes his expertise to drive innovative healthcare solutions for Bruin Health Consulting&apos;s clients.",
    email: "rishvikk11@g.ucla.edu",
    linkedin: "https://www.linkedin.com/in/rishvik-kambhampati/"
  },
  {
    name: "Alfred Ukudeev-Freeman",
    role: "Healthcare Consultant",
    photo: "/images/Untitled design (1).JPEG", 
    bio: "Alfred brings his analytical expertise to develop impactful healthcare solutions for Bruin Health Consulting.",
    email: "alfieuku@ucla.edu",
    linkedin: "https://www.linkedin.com/in/alfred-ukudeev-freeman/"
  },
  // More team members can be added here in the same format
];

export default function Team() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <div className="w-full max-w-screen px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-10 text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
              Our Team
            </h1>
            <div className="w-12 sm:w-16 h-0.5 bg-[#1d4ed8] mx-auto mb-3 sm:mb-4"></div>
            <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base px-2">
              Meet the dedicated professionals behind Bruin Health Consulting, committed to excellence in healthcare consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {TeamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-bold text-[#0a192f] mb-1">{member.name}</h2>
                  <p className="text-[#1d4ed8] font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{member.bio}</p>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope size={12} className="sm:text-sm" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin size={12} className="sm:text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-[#1d4ed8] hover:text-[#1e40af] transition-colors font-medium text-sm"
            >
              Interested in joining our team? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 