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
    photo: "/images/Screenshot 2025-04-17 232313.png", 
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
    <main className="min-h-screen bg-white">
      <div className="px-2 py-10">
        <div className="mx-auto max-w-[100vw]">
          <div className="mb-5 text-center">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#0a192f] mb-2">
              Our Team
            </h1>
            <div className="w-10 h-0.5 bg-[#1d4ed8] mx-auto mb-2"></div>
            <p className="text-gray-600 mx-auto text-xs sm:text-sm px-2 max-w-xs sm:max-w-md">
              Meet the dedicated professionals behind Bruin Health Consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {TeamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-40 sm:h-auto sm:aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  />
                </div>
                <div className="p-2 sm:p-3">
                  <h2 className="text-sm sm:text-base font-bold text-[#0a192f]">{member.name}</h2>
                  <p className="text-[#1d4ed8] font-medium text-xs sm:text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2 sm:line-clamp-3">{member.bio}</p>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope size={10} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin size={10} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-[#1d4ed8] hover:text-[#1e40af] transition-colors font-medium text-xs sm:text-sm"
            >
              Interested in joining our team? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 