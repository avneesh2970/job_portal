import React, { useState } from 'react'
import ForgetPassword from './ForgetPassword'

function Login() {
  const [openForgetPasswordTab, setOpenForgetPasswordTab] = useState(false)
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1'>Login Credentials</div>
        <div className='flex-1'>
          <form action="" className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter email address'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your user name'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Phone Number'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Current Password</label>
              <input
                type="password"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter your password'
              />
            </div>
            <div className='flex justify-end flex-wrap gap-2.5'>
              <button type='button' onClick={()=>setOpenForgetPasswordTab(true)} className='font-medium text-[16px] text-[#F04438] cursor-pointer'>Forgot Password?</button>
            </div>
          </form>
        </div>
      </div>
      {
        openForgetPasswordTab && (
          <ForgetPassword close={()=>setOpenForgetPasswordTab(false)}/>
        )
      }
    </div>
  )
}

export default Login
