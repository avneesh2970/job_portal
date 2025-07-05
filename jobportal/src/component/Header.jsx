
import React, { useState, useEffect, useContext } from "react";
import { FaUser, FaLock, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "./AuthContext";
import logo from './photos/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log('u', user);
  const [users, setUserInfo] = useState(null);
  const [user_email, setuser_email] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pwd, setpwd] = useState('');
  const [userType, setuserType] = useState('')
  // console.log('user deatil',users.userType)
  const [isOpen, setIsOpen] = useState(false);
  const [isCandidateOpen, setIsCandidateOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const navigate = useNavigate();


  const handleOpenCompany = () => {

    const userinfo = { user_email, pwd }; // could be JWT or any auth token

    // Step 1: Open new tab
    const newTab = window.open("http://localhost:5174/", "_blank");

    // Step 2: Wait a little bit and then send the token
    setTimeout(() => {
      newTab.postMessage({ userinfo }, "http://localhost:5174");
    }, 500); // wait half a second so the new tab can load
  };

  const handleOpenCandidate = () => {
    const userinfo = { user_email, pwd }; // could be JWT or any auth token

    // Step 1: Open new tab
    const newTab = window.open("http://localhost:5175/", "_blank");

    // Step 2: Wait a little bit and then send the token
    setTimeout(() => {
      newTab.postMessage({ userinfo }, "http://localhost:5175");
    }, 500); // wait half a second so the new tab can load
  }


  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    const pwd = localStorage.getItem('password');
    setpwd(pwd)
    if (userInfo) {
      try {
        const parsedUser = JSON.parse(userInfo);
        setUserInfo(parsedUser);

        setuser_email(parsedUser.email)
        setuserType(parsedUser.userType);
        // ✅ Correct
      } catch (error) {
        console.error('Error parsing user info:', error);
      }
    } else {
      console.warn('No user info found in localStorage');
    }

  }, [user]);


  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUserInfo(null);
    localStorage.removeItem('userType');
    localStorage.removeItem('password');
  };


  return (
    <nav className="bg-[linear-gradient(130.9deg,_#C4D5FA_-6.66%,_#F7FAFC_55.55%)] w-full h-2/12 sticky flex justify-center items-center top-0 z-20">
      <div className="container mx-auto  flex justify-between items-center p-2.5 ">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10" />
          <p className="text-2xl font-bold text-black">NN<span className="text-blue-400">Hire</span></p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li onClick={() => navigate('/')} className="hover:text-blue-500 cursor-pointer">Home</li>
          <li onClick={() => navigate('/job')} className="hover:text-blue-500 cursor-pointer">Find Jobs</li>
          <li onClick={() => navigate('/about')} className="hover:text-blue-500 cursor-pointer">About us</li>




          {/* Dropdown for Pages */}
          {/* <li
            className="relative hover:text-blue-500 cursor-pointer"
            onMouseEnter={() => setIsPageOpen(true)}
            onMouseLeave={() => setIsPageOpen(false)}
          >
            Pages ▾
            {isPageOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Home
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Contact
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  About
                </li>
              </ul>
            )}
          </li> */}
        </ul>

        {/* Login & Signup */}
        <div className="hidden md:flex">
          {users ? (
            <div className="relative inline-block text-left">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
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
                <div className="absolute right-0 mt-2 w-48 border-gray-300 bg-gray-200 border border-solid rounded-md shadow-lg z-10">
                  {
                    userType === "candidate" ? (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => window.open('/candidate_dashboard', '_blank')}
              // onClick={()=>navigate('/candidate_dashboard')}
                      >
                        Candidate Dashboard
                      </button>
                    ) : (
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                       onClick={() => window.open('/company_dashboard', '_blank')}
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
        <div className="md:hidden">
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
                  <div className="flex items-center gap-4">
                    <span>{user.email}</span>
                    <button onClick={handleLogout} className="text-red-500">Logout</button>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link to="/login" className="text-blue-500">Login</Link>
                    <Link to="/signup" className="text-green-500">Signup</Link>
                  </div>
                )}
              </div>
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">Find Jobs</li>
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





