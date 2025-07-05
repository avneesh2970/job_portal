import { MdMenu } from "react-icons/md";
import { useState } from "react";
import Sidebar from './Sidebar'
import React, { useEffect } from "react";
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
          <p className="bg-amber-300 text-white flex justify-end px-4 py-2  items-center text-xl transition">{user.email}</p>
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