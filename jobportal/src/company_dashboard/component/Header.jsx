import React, { useEffect } from "react";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { Bell } from "lucide-react";
import axios from "axios";
import { ChevronDown, UserCircle2 } from "lucide-react";
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
  const [user, setUser] = useState(null);
    const [openSidebar, setOpenSidebar] = useState(false)
useEffect(() => {
  const userInfo = localStorage.getItem("user");
  if (userInfo) {
    const parsedUser = JSON.parse(userInfo);
    setUser(parsedUser);
  }
},[])


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
  // const [chartData, setChartData] = useState(yearlyData);
  const [timeframe, setTimeframe] = useState("Yearly");
  // const user = localStorage.getItem('user')
  // const userinfo = JSON.parse(user)
  // console.log(userinfo.email)
  return (
    <>
  {/* <nav className="flex justify-end items-center p-2 bg-amber-300 shadow-md w-full ">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition">
          {userinfo.email}
          </button>
          <FaBell className="text-gray-600 text-xl mx-4 cursor-pointer hover:text-gray-800 transition" />
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
    </nav> */}

    <div className="flex justify-between bg-zinc-200 text-white items-center lg:justify-end">
      <MdMenu onClick={()=>setOpenSidebar(true)} className="cursor-pointer lg:hidden w-8 h-8 mx-4 my-2"/>

    {user ? (
      <div className="  flex justify-end px-4 py-2  items-center text-xl transition">  <div className="flex items-center space-x-4">
                        <Bell className="text-gray-500 w-6 h-6 cursor-pointer" />
                        <img src={userInfo.image ? `${import.meta.env.VITE_BACKEND_URL}${userInfo.image}` :`/person.webp`} alt="User" className="w-10 h-10 object-cover rounded-full" />
                        <div className="hidden text-black sm:block">
                            <p className="text-lg font-medium">{userInfo ? userInfo?.firstname : ""} {userInfo ? userInfo?.lastname : ""}</p>
                            <p className="text-sm text-gray-500 justify-end">{userInfo ? userInfo.profile : ""}</p>
                        </div>
                    </div>
                    </div>
    ) : (
      <button className="bg-indigo-600 text-white flex justify-end px-4 py-2  items-center text-xl transition" onClick={() => navigate("/login")}>Login</button>
    )}
 

    {
      openSidebar && (
        <Sidebar containerStyle='w-54 absolute top-0 bg-white text-black shadow-md block lg:hidden z-[10000]' close={()=>setOpenSidebar(false)}/>
      )
    }
    </div>


    </>
  )
}

export default Header