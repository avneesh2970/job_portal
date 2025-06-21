import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 md:px-20 text-gray-800 relative">
      <motion.h1
        className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get in Touch
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          {['name', 'email', 'phone'].map((field, i) => (
            <div key={i} className="relative">
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              />
            </div>
          ))}
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none bg-transparent"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
           <div className="space-y-4">
            <div className="flex items-center gap-2"><Mail /> contact@yourdomain.com</div>
            <div className="flex items-center gap-2"><Phone /> +91 9876543210</div>
            <div className="flex items-center gap-2"><MapPin /> 123 Main Street, City, Country</div>
          </div>
          <div className="flex gap-4 mt-4 text-blue-600">
            <Linkedin className="hover:scale-110 transition-transform cursor-pointer" />
            <Twitter className="hover:scale-110 transition-transform cursor-pointer" />
            <Github className="hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
