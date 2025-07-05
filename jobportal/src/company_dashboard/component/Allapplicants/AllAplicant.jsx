import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

function AllAplicant() {
    const [applicant, setapllicant] = useState([]);
    console.log('applicant status',applicant.status);
    const [status, setStatus] = useState(applicant.status); // State to manage status changes
    
      const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
      }
    };
    
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/applications`);
            console.log(res.data);
          
            setapllicant(res.data.applications);
          } catch (err) {
            console.error('Failed to fetch applications:', err);
          }
        };
      
        fetchData();
      }, []);

    const handleStatusChange = async (userId, jobId, status) => {
  try {
    await axios.put(`/api/users/${userId}/applications/${jobId}/status`, {
      status,
    });

    
    alert("Status updated");
    setStatus(status); 
    // Optionally refresh state
  } catch (err) {
    alert("Failed to update status");
  }
};
      console.log("apllo",applicant)
  return (
    <>
     <div className="flex flex-col bg-white">
      {/* Left Panel */}
      <div className=" rounded-lg  p-5">
        <div className="flex flex-col items-center gap-4">
          
          <div>
            <h2 className="text-lg font-bold">All Applicant </h2>
            
          </div>
          {/* for md and above devices */}
          <div className="w-full hidden md:flex flex-col gap-6 p-6">
 
  {/* Header Row */}
  <div className="flex flex-row items-center bg-blue-50 border border-blue-200 rounded-md p-4 shadow hover:shadow-md transition">
    <div className='w-2/12 '>Name</div>
    <div className='w-2/12 '>Job Title</div>
    <div className='w-2/12 '>Phone</div>
    <div className='w-1/12'>LinkedIn</div>
    <div className='w-1/12'>Portfolio</div>
    <div className='w-1/12'>Resume</div>
    <div className='w-3/12 text-center '>Action</div>
  </div>

  {/* Data Rows */}
  {applicant.map((appl, index) => (
    <div
      key={index}
           className="w-full flex flex-row  items-center bg-blue-50 border border-blue-200 rounded-md p-4 shadow hover:shadow-md transition"
    >
      <div className='w-2/12 '>
        <p className="font-medium text-blue-900 ">{appl.fullName}</p>
        <p className="text-xs text-gray-500">{appl.email}</p>
        <p className="text-xs text-gray-400">Applied: {new Date(appl.appliedAt).toLocaleDateString()}</p>
      </div>

      <div className="text-blue-800 text-base w-2/12 ">{appl.jobTitle}</div>
      <div className="text-blue-800 w-2/12">{appl.phone}</div>

      <div className='w-1/12'>
        <a
          href={appl.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 inline-block "
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className='w-1/12'>
        <a
          href={appl.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 inline-block "
        >
          <FaExternalLinkAlt />
        </a>
      </div>

      <div className='w-1/12'>
        <a
          href={`${import.meta.env.VITE_BACKEND_URL}/${appl.resumePath.replace(/\\/g, '/')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 inline-block "
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className='w-3/12 flex justify-center items-center  mx-auto '>
        
      <select
        value={appl.status}
        onChange={(e) => handleStatusChange(appl?.user, appl?.job, e.target.value)}
      >
        {['Submitted', 'Under Review', 'Interview', 'Offered', 'Rejected'].map(status => (
          <option value={status} key={status}>{status}</option>
        ))}
      </select>
    
      </div>
    </div>
  ))}



</div>

{/* code for small devices */}

          <div className='w-full md:hidden flex flex-col gap-6 '>
           {applicant.map((appl, index) =>(
            <>
               <div className='   bg-blue-50 border border-blue-200 rounded-md p-4 shadow hover:shadow-md transition mb-4'>
              <div className='flex  gap-2 justify-between items-center'>
                <div className='flex flex-col'>
                  <h3 className='text-2xl font-semibold'>{appl.fullName}</h3>
                  <p className='text-blue-500 text-base sm:text-lg'>{appl.jobTitle}</p>
                  <p className='text-blue-500 text-base sm:text-lg'>{appl.email}</p>
                   <p className="text-base sm:text-lg text-gray-500 ">Applied: {new Date(appl.appliedAt).toLocaleDateString()}</p>

                </div>
                <button>
                    <select
                    className='bg-white border border-blue-400 rounded-md p-2 text-sm'
                    value={appl.status}
                    onChange={(e) => handleStatusChange(appl?.user, appl?.job, e.target.value)}
                  >
                    {['Submitted', 'Under Review', 'Interview', 'Offered', 'Rejected'].map(status => (
                      <option value={status} key={status}>{status}</option>
                    ))}
                  </select>
                </button>

              </div>
              
            </div>
            </>
           ))}

          </div>

        </div>
        </div>
        </div>
    
    </>
  )
}

export default AllAplicant