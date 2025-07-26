import React, { useState, useEffect } from 'react'
import ForgetPassword from './ForgetPassword'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios';
function Login({ data }) {
  console.log('Login data:', data);
  const [email, setEmail] = useState('');
  const [type, setType] = useState('password');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);




  useEffect(() => {
    if (data?.email) {
      setEmail(data.email);
    }
  }, [data]);

 const submitHandler = async (e) => {
  e.preventDefault();
  
  if (password === confirmPassword) {
    console.log('Passwords match');

         try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/update-password`, {
          email,
          password
        });
        console.log('Profile updated successfully:', response.data);
        alert('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    

   
  }else{
    alert('Passwords do not match');
  }
}
;

  const togglePasswordVisibility = () => {
    setType(type === 'password' ? 'text' : 'password');
  };
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1  text-xl text-zinc-700 font-semibold'>Login Credentials</div>
        <div className='flex-1'>
          <form className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter email address'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Password</label>
                <div className="relative">
                  <input
                    type={type}
                    placeholder="Enter your new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0] rounded-lg focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-3 right-3 text-gray-600"
                  >
                    {type === 'password' ? <AiOutlineEyeInvisible /> : <MdOutlineRemoveRedEye />}
                  </button>
                </div>
              </div>

            </div>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-[#DEE0E4] p-3 pr-10 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0] rounded-lg focus:outline-none"
                placeholder="Enter your confirm password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-3 right-3 text-gray-600"
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <MdOutlineRemoveRedEye />}
              </button>
            </div>


            <button type='submit' onClick={(e) => submitHandler(e)} className='w-full'>
              <div className='bg-[#4640DE] text-white p-3 rounded-lg text-center hover:bg-[#3730a3] transition-colors duration-300'>
                Update
              </div>
            </button>


          </form>
        </div>
      </div>

    </div>
  )
}

export default Login
