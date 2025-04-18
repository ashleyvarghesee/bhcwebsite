"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const TeamMembers = [
  {
    name: "Ganesh Venumbaka",
    role: "President",
    photo: "/images/DS5A8050.JPG",
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
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-2">
              Our Team
            </h1>
            <div className="w-20 h-1 bg-[#1d4ed8] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals behind Bruin Health Consulting, committed to excellence in healthcare consulting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TeamMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#0a192f]">{member.name}</h2>
                  <p className="text-[#1d4ed8] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope size={16} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#1d4ed8] hover:text-white transition-colors"
                      aria-label={`${member.name}&apos;s LinkedIn profile`}
                    >
                      <FaLinkedin size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-[#1d4ed8] hover:text-[#1e40af] transition-colors font-medium"
            >
              Interested in joining our team? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 