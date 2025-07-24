import React, { use } from 'react'
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate, useLocation } from 'react-router-dom';
function Sidebar({containerStyle, close}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => window.location.pathname === path;
  const handleLogout=()=>{
    alert('logout sucessfully');
    localStorage.removeItem('user');
    localStorage.removeItem('password');  
    navigate('/');
 
   
  }
  return (
    <>
      <aside className={`${containerStyle} h-screen bg-white border-2 border-r-2 border-zinc-300 shadow-[0_0_8px_rgba(0,0,0,0.1)]`}>

        <div className='flex gap-2 ml-5.5 mt-2.5  items-center  '>
         <div className='flex items-center gap-2'> 
        <img src="/logo.png" className='h-10 w-10' alt="Logo" />
      </div>
      <p className='text-2xl font-semibold'>NNHire</p>
          <IoClose onClick={close} className='w-6 h-6 text-blue-600 mt-3 mr-2 lg:hidden cursor-pointer'/>
        </div>
        
        <nav className="mt-6 pb-10 text-lg  pl-5.5 ">
          <Link to="/company_dashboard" onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard') ? 'bg-blue-100' : ''}`}>
            Dashboard
          </Link>
          <Link to="/company_dashboard/companyprofile" onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/companyprofile') ? 'bg-blue-100' : ''}`}>
           Company Profile
          </Link>
          {/* <Link to="/message" onClick={close} className=" cursor-pointer block p-2 rounded ">
           Messages
          </Link> */}
          <Link to="/company_dashboard/allapplicants" onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/allapplicants') ? 'bg-blue-100' : ''}`}>
           All Applicants 
          </Link>
          <Link to="/company_dashboard/joblisting" onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/joblisting') ? 'bg-blue-100' : ''}`}>
           Job Listing
          </Link>
          {/* <a href="#" onClick={close} className=" cursor-pointer block p-2 rounded ">
           My Schedule
          </a> */}

          <Link to="/company_dashboard/post" onClick={close}  className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/post') ? 'bg-blue-100' : ''}`}>
           PostJob
          </Link>
          <Link to='/company_dashboard/viewjob' onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/viewjob') ? 'bg-blue-100' : ''}`}>
           View all Job
          </Link>
            <Link to="/company_dashboard/helpcenter" onClick={close} className={` cursor-pointer block p-2 rounded ${isActive('/company_dashboard/helpcenter') ? 'bg-blue-100' : ''}`}>
            Help Center
          </Link>
        </nav>
        <hr className='border border-zinc-300 shadow-[0_0_8px_rgba(0,0,0,0.1)] ' />
        {/* Sticky Bottom Section */}
         <div className="flex flex-col fixed top-[82vh]   h-full px-4">
           <div className="hidden">
             <p>Lorem, ipsum.</p>
           </div>
       
           <nav className="text-lg pb-6 justify-end ">
             <Link to="/company_dashboard/comp_settings" onClick={close} className={`cursor-pointer block p-2 rounded ${isActive('/company_dashboard/comp_settings') ? 'bg-blue-100' : ''}`}>
               Setting
             </Link>
             <Link onClick={handleLogout} className="cursor-pointer block p-2 rounded">
               Logout
             </Link>
           </nav>
         </div>
      </aside>
    </>
  )
}

export default Sidebar