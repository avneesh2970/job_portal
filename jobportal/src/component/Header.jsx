
import React, { useState,useRef, useEffect, useContext, use } from "react";
import { FaUser, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import logo from './photos/logo.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import axios from 'axios'
const Header = () => {

  const { user } = useContext(AuthContext);
  console.log('u', user);
  const [users, setUserInfo] = useState(null);
 const [companyName, setCompanyName] = useState('')

  const [user_name, setuser_name] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pwd, setpwd] = useState('');
  const [userType, setuserType] = useState('')
  // console.log('user deatil',users.userType)
  const [isOpen, setIsOpen] = useState(false);

  const [isPageOpen, setIsPageOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
         setTimeout(() => {
      setIsOpen(false);
    }, 50); // small delay allows navigation to proceed
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;


useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));;
    const userId = userInfo?.id
    console.log(',,,,,,,,,',userInfo, userId)
    const pwd = localStorage.getItem('password');

  
const fetchData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/profile/${userId}`
    );
    console.log('User data:', response.data);
    setuser_name(response.data.firstname)
    console.log('User ', response.data);
    setUserInfo(response.data)
    // You can also set it in state if needed
    // setUserData(response.data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
    setpwd(pwd)
    if (userInfo) {
      try {

        

        const parsedUser = JSON.parse(localStorage.getItem("user"));
        // setUserInfo(parsedUser);

      
        setuserType(parsedUser.userType);
        // ✅ Correct
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
    } else {
      console.warn('No user info found in localStorage');
    }

    fetchData();

  }, [user]);

  useEffect(() => {
    if (userType != 'Candidate') {
      const fetch = async ()=>{
        const users = JSON.parse(localStorage.getItem('user'));
        const user_email = users?.email;
        console.log('user email...', user_email);

        const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/${user_email}/companyprofile`)
        console.log('company data', data.data);
        setCompanyName(data.data.companyProfile.companyName)
       
        
   
      }
      fetch();
      
    }
  },[user])

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserInfo(null);
    localStorage.removeItem('userType');
    localStorage.removeItem('password');
  };


  return (
    <nav className="bg-[linear-gradient(130.9deg,_#C4D5FA_-6.66%,_#F7FAFC_55.55%)] px-6 md:px-14 w-full h-2/12 sticky flex justify-between items-center top-0 z-20 ">
      <div className="  w-full   flex justify-between items-center p-2.5 ">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center ">
          <img src={logo} alt="Logo" className="w-10" />
          <p className="text-2xl font-bold text-black">NN<span className="text-blue-400">Hire</span></p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li
        onClick={() => navigate('/')}
       className={`cursor-pointer transition-colors duration-300 hover:text-blue-500 ${isActive('/') ? 'text-blue-500' : ''}`}

          >
            Home
          </li>
           <li
        onClick={() => navigate('/job')}
        className={`cursor-pointer transition-colors duration-300 hover:text-blue-500 ${isActive('/job') ? 'text-blue-500' : ''}`}

      >
        Find Jobs
      </li>
           <li
        onClick={() => navigate('/about')}
       className={`cursor-pointer transition-colors duration-300 hover:text-blue-500 ${isActive('/about') ? 'text-blue-500 under' : ''}`}

      >
        About us
      </li>




          
        </ul>

        {/* Login & Signup */}
        <div className="hidden md:flex">
          {users ? (
            <div className="relative inline-block text-left">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center gap-2 cursor-pointer  rounded-lg px-2.5 py-1.5 text-[#4640DE]"
              >
                 <img src={users.image ? `${import.meta.env.VITE_BACKEND_URL}${users.image}` :`/person.webp`} alt="User" className="w-10 h-10 object-cover rounded-full" />
                <div>
                  <span className="text-[#4640DE] font-semibold">{companyName || users?.firstname ||  ''}</span>
                  <p className="text-gray-500">{users?.profile || ''}</p>
                </div>
                <FaChevronDown
                  className={`text-[#4640DE] transition-transform duration-300  ${dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </div>

              {dropdownOpen && (
                <div className="absolute right-0 w-48 border-gray-300 bg-gray-200 border border-solid rounded-md shadow-lg z-10"
                 onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  {
                    userType === "candidate" ? (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                       onClick={() => {
                          navigate('/candidate_dashboard');
                          window.scrollTo(0, 0);
                        }}
              // onClick={()=>navigate('/candidate_dashboard')}
                      >
                        Candidate Dashboard
                      </button>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                       onClick={() =>{
                        navigate('/company_dashboard')
                        window.scrollTo(0, 0);
                       }}
                      >
                        Recruiter Dashboard
                      </button>
                    )
                  }
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="text-blue-500">Login</Link>
              <Link to="/signup" className="text-green-500">Signup</Link>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div  ref={menuRef}  className="md:hidden">
          <button  className="text-gray-700 cursor-pointer">
            {isOpen ? <FaTimes size={25} onClick={() => setIsOpen(false)} /> : <FaBars size={25} onClick={() => setIsOpen(true)}/> }

          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-15 w-full">
          <div className="md:hidden bg-white shadow-md w-full">

            <ul className="flex flex-col items-center space-y-4 py-4">

              <div>
                 {users ? (
            <div className="relative inline-block text-left">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                className="flex items-center gap-2 cursor-pointer border-2 border-[#4640DE] border-solid rounded-lg px-2.5 py-1.5 text-[#4640DE]"
              >
                <FaUserCircle size={28} className="text-[#4640DE]" />
                <span className="text-[#4640DE] font-semibold">{user.email}</span>
                <FaChevronDown
                  className={`text-[#4640DE] transition-transform duration-300  ${dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </div>

              {dropdownOpen && (
                <div className="reolative right-0 w-60 border-gray-300 bg-gray-200 border border-solid rounded-md shadow-lg z-10"
                 onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  {
                    userType === "candidate" ? (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                       onClick={() => {
                          navigate('/candidate_dashboard');
                          window.scrollTo(0, 0);
                        }}
              // onClick={()=>navigate('/candidate_dashboard')}
                      >
                        Candidate Dashboard
                      </button>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                       onClick={() =>{
                        navigate('/company_dashboard')
                        window.scrollTo(0, 0);
                       }}
                      >
                        Recruiter Dashboard
                      </button>
                    )
                  }
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="text-blue-500">Login</Link>
              <Link to="/signup" className="text-green-500">Signup</Link>
            </div>
          )}
              </div>
              <li  onClick={() => navigate('/')} className="hover:text-blue-500 cursor-pointer">Home</li>
              <li onClick={() => navigate('/job')} className="hover:text-blue-500 cursor-pointer">Find Jobs</li>
              {/* <li className="hover:text-blue-500 cursor-pointer">For Candidate</li>
            <li className="hover:text-blue-500 cursor-pointer">For Employee</li>
            <li className="hover:text-blue-500 cursor-pointer">Pages</li> */}

            </ul>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Header;





