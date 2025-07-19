import React, { useState, useEffect } from 'react';
import { Meta, useSearchParams } from 'react-router-dom';


import axios from 'axios';
import CompanyDetail from './CompanyDetail';
function CompanyProfile() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(tabFromUrl);
  const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const token = localStorage.getItem('token');
//       console.log('Token:', token);
//       const user = JSON.parse(localStorage.getItem('user'));
//       const userId = user.id
//       console.log('User ID:', userId);
//       try{
//          const userData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/profile/${userId}`);
//        console.log('User data fetched:', userData.data);
//        setUserData(userData.data);


//       }catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     } 
   
//     fetchData();
//   },[])

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <section className='p-8'>
      <h1 className='font-semibold text-[24px] text-[#1C2638] pb-6'>Setting</h1>
      <div className='flex gap-4 p-4 border-b-1 border-[#DEE0E4]'>
        {["profile Detail",'Company_profile', 'resume', 'login', ].map((tab) => (
          <p
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`cursor-pointer font-semibold text-[16px] ${
              activeTab === tab
                ? 'border-[#4640DE] text-[#4640DE] border-b-2'
                : 'border-b-0 text-[#A0A0A0]'
            }`}
          >
            {tab === 'Company_profile' && ' Company_profile'}
            {tab === 'resume' && 'Team Menbers'}
            {/* {tab === 'login' && 'Login Details'} */}
            {/* {tab === 'Company Profile' && 'Profile Details'} */}
          </p>
        ))}
      </div>
          { activeTab === 'Company_profile' && <CompanyDetail data={userData} />}
      {/* {activeTab === 'profile' && <Profile data={userData} />} */}
      {/* {activeTab === 'resume' && <Resume data={userData} />} */}
      {/* {activeTab === 'login' && <Login />} */}
    
    </section>
  );
}

export default CompanyProfile;












