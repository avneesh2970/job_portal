import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, Mail, Phone, Linkedin, Globe, Menu } from 'lucide-react';
import Profile from '../assets/image/sarah.png'

const ApplicantDetails = () => {
  // Applicant data object
  const applicantData = {
    profile: {
      name: "John Mayer",
      title: "UI/UX Designer",
      image: `${Profile}`
    },
    application: {
      appliedJob: "Product Designer",
      jobType: "Designer • Full-Time",
      appliedDays: 8,
      stage: "Interview",
      stageProgress: 75 // percentage
    },
    contact: [
      { 
        type: "Email", 
        value: "johnmayer@gmail.com", 
        icon: Mail, 
        href: "mailto:johnmayer@gmail.com",
        isLink: true
      },
      { 
        type: "Phone", 
        value: "+91 701-714-8769", 
        icon: Phone, 
        href: "tel:+17017148769",
        isLink: true
      },
      { 
        type: "LinkedIn", 
        value: "linkedin.com/johnmayer", 
        icon: Linkedin, 
        href: "https://linkedin.com/in/johnmayer",
        isLink: true
      },
      { 
        type: "Behance", 
        value: "behance.com/johnmayer", 
        icon: () => <div className="w-5 h-5 flex items-center justify-center"><span className="text-sm font-semibold text-gray-500">Be</span></div>, 
        href: "https://behance.com/johnmayer",
        isLink: true
      },
      { 
        type: "Website", 
        value: "www.johnmayer.com", 
        icon: Globe, 
        href: "https://www.johnmayer.com",
        isLink: true
      }
    ],
    personalInfo: [
      { label: "Full Name", value: "Jane Mayer" },
      { label: "Gender", value: "Male" },
      { label: "Date of Birth", value: "March 23, 1998 (26 year)" },
      { label: "Language", value: "English, Spanish" },
      { label: "Address", value: "4517 Washington Ave. Manchester, Kentucky 39495", fullWidth: true }
    ],
    professionalInfo: {
      about: "\"I'm a UI/UX designer with a deep passion for creating seamless and delightful user journeys. My skills encompass user research, information architecture, interaction design, and visual design, allowing me to approach projects with a holistic perspective. I'm particularly drawn to [mention specific industry or type of project] and am always eager to learn new technologies and methodologies to stay at the forefront of the design field.\"",
      details: [
        { label: "Current Job", value: "UI/UX Designer" },
        { label: "Experience", value: "5+ Years" },
        { label: "Highest Qualification", value: "Bachelor's in Engineering" },
        { label: "Skills", value: "Prototype, Wireframing, Visual Design, Color Theory, Design Thinking, User Research & Analysis, Html, Css, JavaScript", fullWidth: true }
      ]
    }
  };

  const tabs = ['Applicant Profile', 'Resume', 'Hiring Process', 'Interview Schedule'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="w-full mx-auto bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-2">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-lg md:text-xl font-medium text-gray-800">Applicant Details</h1>
          </div>
          <button className="md:hidden" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - hidden on mobile by default, can be toggled */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 border-r border-gray-200 py-6 bg-white md:static fixed top-0 left-0 h-full z-50 overflow-y-auto`}>
          <div className="px-4 md:px-6">
            {/* Mobile Close Button */}
            <div className="flex justify-end md:hidden mb-4">
              <button onClick={toggleSidebar} className="text-gray-500">
                <ArrowLeft size={20} />
              </button>
            </div>
            
            {/* Profile */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img 
                  src={applicantData.profile.image} 
                  alt={applicantData.profile.name} 
                  className="w-20 h-20 rounded-full mb-2"
                />
              </div>
              <h2 className="text-lg font-medium">{applicantData.profile.name}</h2>
              <p className="text-sm text-gray-500">{applicantData.profile.title}</p>
            </div>

            {/* Applied Jobs */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-1">Applied Jobs</div>
              <div className="mb-1 text-gray-400 text-xs">{applicantData.application.appliedDays} days ago</div>
              <div className="mb-1 font-medium">{applicantData.application.appliedJob}</div>
              <div className="text-sm text-gray-500">{applicantData.application.jobType}</div>
            </div>

            {/* Stage */}
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Stage</div>
              <div className="flex items-center mb-2">
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 left-0 h-2 w-3/4 rounded">
                    <div className="h-full w-1/3 bg-yellow-400 rounded-l"></div>
                    <div className="h-full w-1/3 bg-orange-400 absolute left-1/3 top-0"></div>
                    <div className="h-full w-1/3 bg-gray-200 absolute left-2/3 top-0 rounded-r"></div>
                  </div>
                </div>
                <span className="ml-2 text-sm text-yellow-500">{applicantData.application.stage}</span>
              </div>
              <button className="w-full py-2 border border-indigo-500 text-indigo-500 rounded flex items-center justify-center">
                <span>Interview</span>
                <MessageCircle size={16} className="ml-2" />
              </button>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-4">
                {applicantData.contact.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {typeof item.icon === 'function' ? 
                      <item.icon size={18} className="text-gray-400 mr-3" /> :
                      React.createElement(item.icon, { size: 18, className: "text-gray-400 mr-3" })}
                    <div>
                      <div className="text-xs text-gray-500">{item.type}</div>
                      {item.isLink ? (
                        <a href={item.href} className="text-sm text-blue-500 break-all">{item.value}</a>
                      ) : (
                        <div className="text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 py-6 px-4 md:px-8">
          {/* Tabs - scrollable on mobile */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <div className="flex min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 px-4 md:px-6 text-sm font-medium relative whitespace-nowrap ${
                    activeTab === tab 
                      ? 'text-indigo-600 border-b-2 border-indigo-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Applicant Profile Content */}
          {activeTab === 'Applicant Profile' && (
            <div className="mt-6">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 md:gap-x-12">
                  {applicantData.personalInfo.map((item, index) => (
                    <div key={index} className={item.fullWidth ? "col-span-1 md:col-span-2" : ""}>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="break-words">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Professional Information */}
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">Professional Information</h2>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">About me</div>
                  <p className="text-sm text-gray-700">{applicantData.professionalInfo.about}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 md:gap-x-12">
                  {applicantData.professionalInfo.details.map((item, index) => (
                    <div key={index} className={item.fullWidth ? "col-span-1 md:col-span-2" : ""}>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="break-words">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Placeholder for other tabs */}
          {activeTab !== 'Applicant Profile' && (
            <div className="mt-8 text-center text-gray-500">
              {activeTab} content would be displayed here
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar toggle button - fixed at bottom */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        {!sidebarOpen && (
          <button 
            onClick={toggleSidebar}
            className="bg-indigo-600 text-white p-3 rounded-full shadow-lg"
          >
            <Menu size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ApplicantDetails;