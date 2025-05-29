"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Send to Formspree
      const response = await fetch("https://formspree.io/f/mwpbekll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again later.");
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "An unknown error occurred. Please try again later.");
      console.error("Form submission error:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-2">
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-[#1d4ed8] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about Bruin Health Consulting? Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 border-l-4 border-[#1d4ed8]">
                <h2 className="text-xl font-semibold text-[#0a192f] mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 bg-[#1d4ed8] rounded p-2 mr-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <a 
                        href="mailto:bruinhealthconsulting@gmail.com" 
                        className="text-[#1d4ed8] hover:underline"
                      >
                        bruinhealthconsulting@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              {isSubmitted ? (
                <div className="bg-white border border-gray-200 p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#0a192f]">Message Sent</h2>
                  </div>
                  <p className="text-gray-600 mb-8">Thank you for contacting Bruin Health Consulting. We have received your message and will respond to you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#1d4ed8] text-white px-6 py-3 hover:bg-[#1e40af] transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-[#0a192f] mb-6">Send a Message</h2>
                  
                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1d4ed8]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1d4ed8]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1d4ed8]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#1d4ed8]"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1d4ed8] text-white px-6 py-3 flex items-center justify-center hover:bg-[#1e40af] transition-all duration-300 disabled:bg-blue-300"
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : (
                        <>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 