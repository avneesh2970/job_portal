import { useState } from 'react'
import React from 'react'

import './App.css'
import Signup from './component/Home/Signup'
import Login from './component/Home/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CompanyProfilePage from './pages/CompanyProfilePage'
import Findjob from './component/Job/Findjob'
import Applayout from './Applayout'
import Jobdetail from './component/Job/Jobdetail'
import Homepage from './pages/Homepage'
import About from '../src/component/About'
import CandidateDashboard from './candidate_dashboard/component/dashboard/Dashboard.jsx'
import CandFindjob from './candidate_dashboard/component/findjob/Findjob.jsx'
import Cand_applayout from './candidate_dashboard/Applayout.jsx'
import CandJobdetail from './candidate_dashboard/component/findjob/JobDetails.jsx'
import CandApplication from './candidate_dashboard/component/application/MyApplications.jsx'
import CandProfilePage from './candidate_dashboard/pages/ProfilePage.jsx'
import CandProfileSetting from './candidate_dashboard/pages/ProfileSetting.jsx'
import CandEducationSkillsForm from './candidate_dashboard/pages/EducationSkillForm.jsx'
import CandLogindetails from './candidate_dashboard/pages/LoginDetails.jsx'
import CandSetting from './candidate_dashboard/component/candidateSetting/CandidateSetting.jsx'
import CandSavedJobs from './candidate_dashboard/component/savedjob/Savedjob.jsx'
import CompApplayout from './company_dashboard/Applayout.jsx'
import Comp_Dashboard from './company_dashboard/component/dashboard/Dashboard.jsx'
import Company_Profile from './company_dashboard/component/company/CompanyProfile.jsx'
import MessagingUI from './company_dashboard/component/message/Message.jsx'
import PostJob from './company_dashboard/component/PostJob/postjob.jsx'
import Viewjob from './company_dashboard/component/PostJob/viewJob.jsx'
import Update from './company_dashboard/component/PostJob/update.jsx'
import CompSettingpage from './company_dashboard/component/setting/Setting.jsx'
import AllAplicant from './company_dashboard/component/Allapplicants/AllAplicant.jsx'
import Joblisting from './company_dashboard/component/joblist/Joblisting.jsx'
import  InterviewSchedule from './company_dashboard/component/Allapplicants/InterviewSchedule.jsx'

import { View } from 'lucide-react'
import HelpCenter from './candidate_dashboard/component/HelpCenter.jsx'
import CompanyProfile from './company_dashboard/component/setting/CompanyProfile.jsx'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:'/',
          element:<Homepage/>
        },{
          path:'/signup',
          element:<Signup/>
        },{
          path:'/login',
          element:<Login/>
        },{
          path:'/job',
          element:<Findjob/>
        },{
          path:'/job/:id',
          element:<Jobdetail/>
        },{
          path:'/company',
          element:<CompanyProfilePage/>
        },{
          path:'/about',
          element:<About/>
        }
      ]
    },{
      path:"/candidate_dashboard",
      element:<Cand_applayout/>,
      children:[
        {
          path:'/candidate_dashboard',
          element:<CandidateDashboard/>
        },{
           path:'Cand_job',
          element:<CandFindjob/>
        },{
          path:'cand_job/:jobId',
          element:<CandJobdetail/>
        },{
          path:'cand_myapplication',
          element:<CandApplication/>
        },{
          path:'cand_profile',
          element:<CandProfilePage/>
        },{
          path:'cand_profilesetting',
          element:<CandProfileSetting/>
        },{
          path:'cand_educationskillsform',
          element:<CandEducationSkillsForm/>
        },{
          path:'cand_logindetails',
          element:<CandLogindetails/>
        },{
          path:'cand_settings',
          element:<CandSetting/>
        },{
          path:'cand_savedjobs',
          element:<CandSavedJobs/>

        },{
          path:'cand_helpcenter',
          element:<HelpCenter/>
        }
      ]
    },{
      path:'/company_dashboard',
      element:<CompApplayout/>,
      children:[
        {
          path:'/company_dashboard',
          element:<Comp_Dashboard/>
        },{
          path:'Company_profile',
          element:<Company_Profile/>
        },{
          path:'company_msg',
          element:<MessagingUI/>
        },{
          path:'post',
          element:<PostJob/>
        },{
          path:'viewjob',
          element:<Viewjob/>
        },{
          path:'updatejob/:id',
          element:<Update/>
        },{
          path:'comp_setting',
          element:<CompSettingpage/>
        },{
          path:'allapplicants',
          element:<AllAplicant/>
        },{
          path:'joblisting',
          element:<Joblisting/>
        },{
          path:'interviewSchedule',
          element:<InterviewSchedule/>
        },{
          path:'comp_settings',
          element:<CompanyProfile/>
        }
        // ,{
        //   path:'comp_about',
        //   element:<CompAboutUs/>
      
        // }
      ]
    }
  ])

 
 return <RouterProvider router={router}/>
}

export default App
