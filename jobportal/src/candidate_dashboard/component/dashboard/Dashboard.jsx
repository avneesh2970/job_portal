import React,{useEffect} from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {useNavigate} from "react-router-dom";
import PersnolProfile from "./PersonalProfile"
import axios from 'axios';
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
const yearlyData = [
  { year: "2013", jobView: 200000, jobApplied: 150000, jobInterview: 25400 },
  { year: "2014", jobView: 220000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2015", jobView: 100000, jobApplied: 180000, jobInterview: 52540 },
  { year: "2016", jobView: 50000, jobApplied: 150000, jobInterview: 50254 },
  { year: "2017", jobView: 90000, jobApplied: 120000, jobInterview: 50254 },
  { year: "2018", jobView: 110000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2019", jobView: 140000, jobApplied: 120000, jobInterview: 52540 },
  { year: "2020", jobView: 160000, jobApplied: 140000, jobInterview: 52540 },
  { year: "2021", jobView: 200000, jobApplied: 150000, jobInterview: 52540 },
  { year: "2022", jobView: 100000, jobApplied: 180000, jobInterview: 52540 },
  { year: "2023", jobView: 210000, jobApplied: 160000, jobInterview: 52540 },
];

const monthlyData = [
  { month: "Jan", jobView: 20000, jobApplied: 15000, jobInterview: 53240 },
  { month: "Feb", jobView: 18000, jobApplied: 14000, jobInterview: 53240 },
  { month: "Mar", jobView: 22000, jobApplied: 16000, jobInterview: 53240 },
  { month: "Apr", jobView: 25000, jobApplied: 17000, jobInterview: 53240 },
  { month: "May", jobView: 30000, jobApplied: 20000, jobInterview: 53240 },
  { month: "Jun", jobView: 27000, jobApplied: 19000, jobInterview: 53240 },
  { month: "Jul", jobView: 32000, jobApplied: 22000 },
  { month: "Aug", jobView: 31000, jobApplied: 21000 },
  { month: "Sep", jobView: 28000, jobApplied: 18000 },
  { month: "Oct", jobView: 26000, jobApplied: 16000 },
  { month: "Nov", jobView: 24000, jobApplied: 14000 },
  { month: "Dec", jobView: 23000, jobApplied: 13000 },
];

const weeklyData = [
  { week: "Week 1", jobView: 5000, jobApplied: 4000, jobInterview: 5354 },
  { week: "Week 2", jobView: 7000, jobApplied: 5000, jobInterview: 5354 },
  { week: "Week 3", jobView: 6000, jobApplied: 4500, jobInterview: 5354 },
  { week: "Week 4", jobView: 8000, jobApplied: 6000, jobInterview: 5354 },
];



const userData = {
  image: "/profile-pic.png",
  name: "Natasha Bunny",
  role: "UI/UX Designer",
  personalDetails: [
    { label: "Level", value: "Mid Level" },
    { label: "Experience", value: "4+ years" },
    { label: "Salary", value: "$5,000/m" },
    { label: "Emp. Type", value: "Full-time" },
  ],
  experience: [
    { logo: "/komodo-logo.png", role: "Junior UX Designer", company: "Komodo" },
    { logo: "/nomad-logo.png", role: "Software Developer", company: "Nomad" },
  ],
  skills: ["UI/UX", "Design System", "Figma", "UX Research", "Prototype", "Wireframe"],
};

const applicantSummary = {
  totalApplicants: 76,
  categories: [
    { label: "Full Time", count: 12, color: "bg-blue-600" },
    { label: "Part-Time", count: 15, color: "bg-green-500" },
    { label: "Remote", count: 13, color: "bg-blue-400" },
    { label: "Internship", count: 17, color: "bg-orange-400" },
    { label: "Contract", count: 19, color: "bg-red-500" },
  ],
};

function Dashboard() {
  const [chartData, setChartData] = useState(yearlyData);
    const [timeframe, setTimeframe] = useState("Yearly");
    const [applied, setApplied] = useState();
    console.log("applied", applied);
    const [userApplied, setUserApplied] = useState([]);
    console.log("userApplied", userApplied);
  const[job, setjob] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState("");
 
  const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  const month = date.toLocaleString('default', { month: 'long' }); // "June"
  const year = date.getFullYear(); // 2024

  return `${day}${getOrdinal(day)} ${month} ${year}`;
};

  useEffect(() => {
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost`);
      console.log(response.data); // ✅ Use response.data, not response.response
      setjob(response.data);

      const data = JSON.parse(localStorage.getItem("user"));
      const user_id = data.id;
      console.log("User id:", user_id);
      const apply = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/user/${user_id}/applied-jobs`);
      setUserApplied( apply.data.user.applied);
      setApplied(apply.data.user.applied.length);
      const userinfo = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${user_id}`);
      setUserinfo(userinfo.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  fetchJobs();
}, []);


  return (
    <>
       <h2 className="text-xl mx-8  pt-5 font-semibold">
          hey , {userinfo ? userinfo.firstname : "User"} 👋
        </h2>
        <p className="text-gray-500 mx-8">
          Here is your job listings statistic report.
        </p>

       
        <div className="md:flex mx-8 gap-4 mt-6 gap-y-4   lg:grid lg:grid-cols-4    ">
          <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaUser className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">{applied}</h3>
              <p>application Sent</p>
            </div>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaCalendarAlt className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">0</h3>
              <p>Interview schedule</p>
            </div>
          </div>
          <div className="bg-blue-300 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaEnvelope className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">{job.length}</h3>
              <p>Total job offer</p>
            </div>
          </div>
          {/* <div className="bg-blue-300 text-white p-4 rounded-lg flex items-center md:mb-0 mb-4 ">
            <FaEnvelope className="text-2xl mr-2" />
            <div>
              <h3 className="text-lg font-bold">23</h3>
              <p>unread masege</p>
            </div>
          </div> */}
        </div>

      
        <div className="bg-white  rounded-lg shadow-md  mx-auto px-2  py-5">
          <div className=" md:grid md:grid-cols-3 gap-3">
           <div className="col-span-2" >
              {/* <div className="flex justify-between pb-10 ">
                <h3 className="text-lg font-semibold">Profile View</h3>
                <div className="flex rounded-2xl">
                  <button
                    onClick={() => {
                      setChartData(weeklyData);
                      setTimeframe("Weekly");
                    }}
                    className={`px-4 py-2 rounded ${
                      timeframe === "Weekly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => {
                      setChartData(monthlyData);
                      setTimeframe("Monthly");
                    }}
                    className={`px-4 py-2 rounded ${
                      timeframe === "Monthly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => {
                      setChartData(yearlyData);
                      setTimeframe("Yearly");
                    }}
                    className={`px-4 py-2 rounded ${
                      timeframe === "Yearly"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <XAxis
                    dataKey={
                      timeframe === "Yearly"
                        ? "year"
                        : timeframe === "Monthly"
                        ? "month"
                        : "week"
                    }
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="jobView"
                    stackId="a"
                    fill="#4F46E5"
                    name="Job View"
                  />
                  <Bar
                    dataKey="jobApplied"
                    stackId="a"
                    fill="#F59E0B"
                    name="Job Applied"
                  />
                  <Bar
                    dataKey="jobInterview"
                    stackId="a"
                    fill="#10B981"
                    name="Job Interview"
                  />
                </BarChart>
              </ResponsiveContainer> */}
          
  <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Recent Applied Jobs</h2>
      <a onClick={()=>navigate('/candidate_dashboard/cand_myapplication')} className="text-purple-600 font-medium hover:underline cursor-pointer">Show all →</a>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm">
            <th className="p-3">Company Name</th>
            <th className="p-3">Postion</th>
            <th className="p-3">Date</th>
            <th className="p-3">Date of Applied</th>
          </tr>
        </thead>
        <tbody>
       {loading ? (
  <tr>
    <td colSpan="4" className="text-center py-6">
      <div className="flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-500 mt-2 text-sm">Loading applied jobs...</p>
    </td>
  </tr>
) : (
  userApplied.map((job) => (
    <tr key={job._id} className="border-b">
      <td className="">
        <div className="flex items-center gap-2 py-2">
          <div className="rounded-md w-8 h-8 overflow-hidden">
            <img
              src={job?.job?.companyLogo}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{job?.job?.companyName}</p>
            <p className="text-sm text-gray-500">{job?.type}</p>
          </div>
        </div>
      </td>

      <td className="p-3 text-gray-700">
        {job?.job?.jobTitle || 'N/A'}
      </td>
      <td className="p-3 align-middle text-center">
        <span
          className={`  py-2 flex justify-center items-center rounded-full text-sm font-semibold  transition-all duration-200
    ${
      job.status === "Submitted"
        ? "border border-amber-300 bg-amber-50 text-amber-600"
        : job.status === "Under Review"
        ? "border border-blue-300 px-2.5 py-1 text-sm w-full h-10 bg-blue-50 text-blue-600"
        : job.status === "Interview"
        ? "border border-green-300 bg-green-50 text-green-600"
        : job.status === "Offered"
        ? "border border-green-400 bg-green-100 text-green-700"
        : job.status === "Rejected"
        ? "border border-red-300 bg-red-50 text-red-600"
        : "border border-gray-300 bg-gray-50 text-gray-600"
    }`}
        >
          {job.status}
        </span>
      </td>
      <td className="p-3 text-gray-700 whitespace-nowrap">
        {formatDate(job.appliedAt)}
      </td>
    </tr>
  ))
)}

        </tbody>
      </table>
    </div>
  </div>


           </div>

            <div className="  bg-white rounded-xl shadow-sm p-6 space-y-6 justify-self-center">
            <PersnolProfile user={userData}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard