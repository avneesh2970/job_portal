import React, { useState, useEffect } from 'react'
import { FiUploadCloud } from 'react-icons/fi';
import { HiOutlineUserCircle } from "react-icons/hi";
import axios from 'axios';
function Profile({data}) {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // for sending to backend
  console.log('image:', image, 'imageFile:', imageFile);
  console.log('Profile data:', data);
  
  const [formData, setFormData] = useState({
    firstname:"",
    lastname: "",
    profile:'',
    email: data.email || "",
    phone: "",  
    dateOfBirth: "",
    gender: "",
    country: "",  
    city: "",
    state: "",
    pinCode: "",
    addressLine1: "",
    addressLine2: "",
    linkedProfile: "",
    portfolio: ""

  });
  





  useEffect(() => {
  if (data?.email) {
    setFormData((prev) => ({ ...prev, email: data.email, firstname: data.firstname || '', lastname: data.lastname || '', profile: data.profile || '', phone: data.phone || '', dateOfBirth: data.dateOfBirth || "", gender: data.gender || '', country: data.address?.country || '', city: data.address?.city || '', state: data.address?.state || '', pinCode: data.address?.pincode || '', addressLine1: data.address?.address1 || '', addressLine2: data.address?.address2 || '', linkedProfile: data.linkedProfile || '', portfolio: data.portfolio || '' }));
  }
}, [data]);


 const handleImageChange = (e) => {
  const file = e.target.files[0];
  console.log('Selected file:', file);
  if (file ) {
    setImage(URL.createObjectURL(file)); // ✅ preview only
    setImageFile(file); // ✅ actual file for upload
  } else {
    alert('Only PNG or JPG formats are supported.');
  }
};


  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  
      [name]: value
    })};

   const HandleSubmit = async (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  const formDataToSend = new FormData();

  for (let key in formData) {
    formDataToSend.append(key, formData[key]);
    console.log(`FormData key: ${key}, value: ${formData[key]}`);
  }

  if (imageFile) {
    formDataToSend.append('image', imageFile); // 👈 field name must match multer
    console.log('Image file added to FormData:', imageFile);
  }

  try {
    const res = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/profileUpdate/${userId}/upload-image`,
      formDataToSend,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    alert('Profile updated successfully');
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

  return (
    <form onSubmit={HandleSubmit}>
      <div className='py-4'>
        <p className='font-medium text-[18px] text-[#1C2638]'>Basic Information</p>
        <p className='font-normal text-[16px] text-[#A0A0A0]'>This information will be displayed publicly.</p>
      </div>
      {/* file upload */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1 text-xl text-zinc-700 font-semibold'>Profile Photo</div>
   <div className="flex justify-center mx-auto flex-col md:flex-row items-center gap-6">
  <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden  bg-gray-100 border border-gray-300">
    {image ? (
      <img
        src={image}
        alt="Profile"
        className="object-cover w-full h-full"
      />
    ) : data.image ? (
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}${data.image}`}
        alt="Profile"
        className="object-cover w-full h-full"
      />
    ) : (
      <HiOutlineUserCircle className="text-[#A0A0A0] w-24 h-24" />
    )}
  </div>

  <label
    htmlFor="file-upload"
    className="cursor-pointer w-64 h-32 border-2 border-dashed border-[#4640DE] rounded-md flex flex-col items-center justify-center text-center hover:bg-purple-50 transition"
  >
    <FiUploadCloud className="text-[#4640DE] text-3xl mb-2" />
    <p className="text-[16px] text-[#A0A0A0] leading-tight">
      <span className="text-blue-600 font-medium">Click to replace</span> or drag and drop<br />
      PNG or JPG (max. 400 x 400px)
    </p>
    <input
      type="file"
      id="file-upload"
      accept=".png, .jpg, .jpeg"
      className="hidden"
      onChange={handleImageChange}
    />
  </label>
</div>

      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>
      {/* candidate personal info */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1 text-xl text-zinc-700 font-semibold'>Personal Details</div>
        <div className='flex-1'>
          <div action="" className=' grid gap-6'>
            <div className='flex gap-3    w-full'>
              <div className='flex flex-col w-6/12 '>
                <label htmlFor="">First Name</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                name='firstname' // Add name attribute for form handling
                placeholder='Enter first name'
                value={formData.firstname || ''} // Use data.first if available
                onChange={(e) => handlechange(e)
                  }
              />
              </div>
              <div className='flex flex-col w-6/12 '>
                <label htmlFor="">Last Name</label>
              <input
                type="text"
                className='border border-[#DEE0E4] py-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                name='lastname' // Add name attribute for form handling
                placeholder='Enter last name'
                value={formData.lastname || ''} // Use data.first if available
                onChange={(e) => handlechange(e)
                  }
              />
              </div>
            </div>
             <div className='flex flex-col'>
              <label htmlFor="">Domain</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                name='profile' // Add name attribute for form handling
                placeholder='Enter Profile  Name'
                value={formData.profile || ''} // Use data.name if available
                onChange={(e) => handlechange(e)
                  }
              />
            </div>
             <div className='flex flex-col'>
              <label htmlFor="">Linked Profile URL</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                name='linkedProfile' // Add name attribute for form handling
                placeholder='Enter Linked Profile URL'
                value={formData.linkedProfile || ''} // Use data.name if available
                onChange={(e) => handlechange(e)
                  }
              />
            </div>
             <div className='flex flex-col'>
              <label htmlFor="">Portfolio URL</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                name='portfolio' // Add name attribute for form handling
                placeholder='Enter Portfolio URL'
                value={formData.portfolio || ''} // Use data.name if available
                onChange={(e) => handlechange(e)
                  }
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your email address'
                  value={data.email || ''} // 
                  name='email' // Add name attribute for form handling
                  onChange={(e) => handlechange(e)
                  }
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Phone Number</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Phone Number'
                  value={formData.phone || ''} // Use formData.phone if available
                  onChange={(e) => handlechange(e)
                  }
                  name='phone' // Add name attribute for form handling

                />
              </div>
            </div>


            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Date of Birth</label>
                <input
                  type="Date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your email address'
                  value={formData.dateOfBirth || ''} // Use formData.dateOfBirth if available
                  onChange={(e) => handlechange(e)
                  }
                  name='dateOfBirth' // Add name attribute for form handling
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Gender</label>
                <select   name="gender"
                value={formData.gender}
                onChange={(e)=>handlechange(e)}
                className='border border-[#DEE0E4] p-3 font-normal text-[14px] text-[#1E283C]'>
                  <option value="">Enter Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* <div>
              <textarea
                rows={5}
                name=""
                id=""
                className='border w-full border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0] resize-none'
                placeholder='Terms and conditions goes here...'
              />
              <div className='flex justify-between'>
                <p className='text-[#A0A0A0] font-normal text-[14px]'>Minimum 250 characters</p>
                <p className='font-normal text-[14px] text-[#1C2638]'>0/500</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>
      {/* address*/}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1 text-xl text-zinc-700 font-semibold'>Address Information</div>
        <div className='flex-1'>
          <div action="" className='grid gap-6'>
            
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Country*</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your country'
                  value={formData.country || ''} // Use formData.country if available
                  onChange={(e) => handlechange(e)
                  }
                  name='country' // Add name attribute for form handling
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">City/Town*</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your city'
                  value={formData.city || ''} // Use formData.city if available
                  onChange={(e) => handlechange(e)
                  }
                  name='city' // Add name attribute for form handling
                />
              </div>
            </div>

            
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">State</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your state'
                  value={formData.state || ''} // Use formData.state if available
                  onChange={(e) => handlechange(e)  }
                  name='state' // Add name attribute for form handling
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Pin Code</label>
                <input
                  type="number"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Pin Code'
                  value={formData.pinCode || ''} // Use formData.pinCode if available
                  onChange={(e) => handlechange(e)}
                  name='pinCode' // Add name attribute for form handling
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Address line1</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter address line1'
                name='addressLine1' // Add name attribute for form handling
                value={formData.addressLine1 || ''} // Use formData.addressLine1 if
                onChange={(e) => handlechange(e)  } // Handle change event
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Address line2 (Optional)</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter address line2'
                value={formData.addressLine2 || ''} // Use formData.addressLine2 if available
                onChange={(e) => handlechange(e)}
                name='addressLine2' // Add name attribute for form handling
              />
            </div>

            <div className='flex justify-end flex-wrap gap-2.5'>
              <button className='border border-[#C6C4F5] text-[#4640DE] font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Cancel</button>
              <button type="submit" className='border bg-[#4640DE] text-white font-medium text-[18px] px-8 py-2 rounded-xl cursor-pointer'>Save Account Detail</button>
            </div>
          </div>
        </div>
      </div>

    </form>
  )
}

export default Profile
