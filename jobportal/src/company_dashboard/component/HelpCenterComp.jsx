import React, { useState } from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import axios from 'axios';
const HelpCenter = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log('Form submitted:', form);
    try{
      const data = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email-dashboard`, form);
      console.log('Email sent successfully:', data);
      setSuccess(true);
      setLoading(false);
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('Error sending email:', error);
      
    }
  };

  return (
    <div className="h-screen flex flex-col  bg-gray-50">
      {/* Left Image */}
      {/* <div className=" h-64 w-full flex items-center justify-center bg-blue-100 ">
        <img
          src="/img.jpg"
          alt="Help Center"
          className="w-full  object-contain"
        />
      </div> */}

      <div className='flex flex-row'>
        {/* Right Form */}
      <div className=" w-full md:w-7/12  flex flex-col p-8  bg-zinc-50  items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-2">
          <h2 className="text-3xl font-semibold text-gray-800">Help Center</h2>
          <p className="text-gray-600 text-sm py-4">
            Need assistance? Fill out the form below and our support team will get back to you.
          </p>
          <div>
          {success && (
            <p className='text-green-500 text-base'>Your request has been submitted successfully! 
            we will contact you shortly.</p>
          )}
        </div>

          <div>
            <label className="block text-gray-700 text-sm ">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm ">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm ">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm ">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

         {loading ? (
          <button
            type="submit"
            disabled
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-not-allowed"
          >
            Submitting...
          </button>
         ) : (
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit Request
          </button>
         )}
        </form>
        
      </div>
      <div className=' flex py-4  flex-col items-start justify-center w-full md:w-5/12  '>
       
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto  mt-1.5  p-3  rounded-xl shadow-md">
       <div className='flex items-center justify-center w-full  '>
      <img src="/img.jpg" alt="Help Center"
          className="w-full h-56 rounded-t-sm  object-cover" />

      </div>
     
      <div className='w-full flex flex-col gap-2'>
         {/* Address */}
      <div className="flex items-start gap-2 border border-zinc-200 p-4 rounded-lg w-full   transition">
        <div className="bg-blue-100 p-2 rounded-full">
          <MdLocationOn className="text-blue-500 text-2xl" />
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">Address</p>
          <p className="text-sm text-gray-600">
            GMS Rd, Haripuram, Kanwali,<br />
            Dehradun, Uttarakhand 248001
          </p>
        </div>
      </div>

      {/* Email */}
    
       <a href="mailto:info@novanectar.co.in" className="block w-full">
  <div className="flex items-start gap-4 border border-zinc-200 p-4 rounded-lg w-full hover:bg-zinc-50 transition cursor-pointer">
    <div className="bg-blue-100 p-2 rounded-full">
      <MdEmail className="text-blue-500 text-2xl" />
    </div>
    <div>
      <p className="font-semibold text-gray-700 mb-1">Email</p>
      <p className="text-base text-blue-600">info@novanectar.co.in</p>
    </div>
  </div>
</a>
      

      {/* Phone */}
      <div className="flex items-start gap-2 border border-zinc-200 p-4 rounded-lg w-full shadow-sm  transition">
       <div className="bg-blue-100 p-2 rounded-full">
          <MdPhone className="text-blue-500 text-2xl" />
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">Phone Numbers</p>
          <a href="tel:+918979891703" className="block text-sm text-gray-700 hover:underline">
            +91 8979891703
          </a>
          <a href="tel:+918979891705" className="block text-sm text-gray-700 hover:underline">
            +91 8979891705
          </a>
        </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default HelpCenter;
