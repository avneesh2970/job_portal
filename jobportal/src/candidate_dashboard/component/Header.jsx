import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Sidebar from './Sidebar'
import React, { useEffect } from "react";
import { Bell } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   
import { ChevronDown } from "lucide-react";
// import PersnolProfile from "./PersnolProfile";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaEye,
  FaList,
  FaBell,
} from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Header() {
   const [userInfo, setUserInfo] = useState("");
      console.log('userInfo FROM HEADER', userInfo);
  // const [chartData, setChartData] = useState(yearlyData);
  const [timeframe, setTimeframe] = useState("Yearly");
  const [user, setUser] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false)
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const parsedUser = JSON.parse(userInfo);
      setUser(parsedUser);
    }
  }, [])


   useEffect(() => {
    const users = JSON.parse(localStorage.getItem('user'));
    const user_id = users?.id;
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
       // Adjust based on your API response shape
        // set initially
        
        const user = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${user_id}`);
        setUserInfo(user.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);


  return (
    <>
      {/* <nav className="flex justify-end items-center p-2 bg-amber-300 shadow-md w-full ">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition">
            + Post a job
          </button>
          <FaBell className="text-gray-600 text-xl mx-4 cursor-pointer hover:text-gray-800 transition" />
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </nav> */}

      <nav className="flex justify-between lg:justify-end items-center px-2 py-2 shadow-md w-full sticky top-0 z-50 bg-white lg:relative">
        <div className="cursor-pointer lg:hidden w-6 h-6">
          <MdMenu onClick={() => setOpenSidebar(true)} className="w-6 h-6" />
        </div>
        {user ? (
          <p className="  flex justify-end px-4 py-2  items-center text-xl transition">  <div className="flex items-center space-x-4">
                        <Bell className="text-gray-500 w-6 h-6 cursor-pointer" />
                        <img src={userInfo.image ? `${import.meta.env.VITE_BACKEND_URL}${userInfo.image}` :`/person.webp`} alt="User" className="w-10 h-10 object-cover rounded-full" />
                        <div className="hidden sm:block">
                            <p className="text-lg font-medium">{userInfo ? userInfo?.firstname : ""} {userInfo ? userInfo?.lastname : ""}</p>
                            <p className="text-sm text-gray-500 justify-end">{userInfo ? userInfo.profile : ""}</p>
                        </div>
                    </div></p>
        ) : (
          <button className="bg-indigo-600 text-white flex justify-end px-4 py-2  items-center text-xl transition" onClick={() => navigate("/login")}>Login</button>
        )}
        {
          openSidebar && (
            <Sidebar close={() => setOpenSidebar(false)} containerStyle='absolute top-0 z-50 block lg:hidden w-full bg-white shadow-md ' />
          )
        }
      </nav>

    </>
  )
}

export default Header