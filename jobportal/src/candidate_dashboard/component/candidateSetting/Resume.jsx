import React, { useState, useEffect } from 'react'
import { IoAdd, IoClose } from 'react-icons/io5'
import { PiPencilSimpleLine } from "react-icons/pi";
import { FaBold, FaItalic, FaListUl, FaListOl, FaSmile } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import axios from 'axios';

function Resume({data}) {
  const [skills, setSkills] = useState([
    'Time Management',
    
  ]);
  const [educationdetail, setEducationDetail] = useState({
    institute: '',
    degree: '',
    specialization: '',
    StartDate: '',
    EndDate: '',
    skills: [],
    // Add other fields as needed
  
  });
  const [workdetail, setWorkDetail] = useState({
    company: '',
    jobTitle: '',
    employmentType: '',
    industry: '',
    salary: '',
    location: '',
    StartDate: '',
    EndDate: '',
  })
  const [educationList, setEducationList] = useState([]); // ⬅️ This will store multiple entries
  const [workExperiencelist, setWorkExperiencelist] = useState([]); // ⬅️ This will store multiple entries
  const [resume, setResume] = useState(null);

const [resumeUrl, setResumeUrl] = useState(''); // URL from backend
console.log('Resume URL:', resumeUrl);

  useEffect(()=>{
    if(data && data.education) {
      setEducationList(data.education);
    }
    if(data && data.workExperience) {
      setWorkExperiencelist(data.workExperience);
    }
    if(data && data.skills) {
      setSkills(data.skills);
    }
    if(data && data.resume) {
      setResumeUrl(data.resume); // e.g. "/uploads/resume/1725973523567.pdf"
      console.log('Resume URL from data:', data.resume);

    }
  },[data])

  console.log('Education Detail:', educationdetail);
useEffect(() => {
  console.log('Updated Education List:', educationList);
   console.log('Updated Work Experience List:', workExperiencelist);
}, [educationList, workExperiencelist]);


    const [language, setLanguage] = useState([
    'English',
    
  ]);

  const [newSkill, setNewSkill] = useState('');



  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

const addSkill = () => {
  const trimmed = newSkill.trim();
  if (trimmed && !skills.includes(trimmed)) {
    setSkills([...skills, trimmed]);
  }
  setNewSkill('');
};
    const removelanguage = (indexToRemove) => {
    setLanguage(language.filter((_, index) => index !== indexToRemove));
  };

  const addlanguage = () => {
    const trimmed = newSkill.trim();
    if (trimmed && !language.includes(trimmed)) {
      setLanguage([...language, trimmed]);
    }
     setEducationDetail((prev) => ({
    ...prev,
    Languages: [...prev.language, newSkill.trim()],
  }));

    setNewSkill('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
    setWorkDetail((prev) => ({  
      ...prev,
      [name]: value,
    }))
   
  }
  

  const handleAddEducation = () => {
  // Prevent empty entries
  if (!educationdetail.institute || !educationdetail.degree) return;

  // Add to list
  setEducationList((prev) => [...prev, educationdetail]);

  // Clear form
  setEducationDetail({
    institute: '',
    degree: '',
    specialization: '',
    StartDate: '',
    EndDate: '',
    skills:[],
  });
};
  const handleWorkexperience = () => {
    
  // Prevent empty entries
  if (!workdetail.company || !workdetail.jobTitle) return;

  // Add to list
   setWorkExperiencelist((prev) => [...prev, workdetail]);
  // Clear form
  setWorkDetail({
    company: '',
    jobTitle: '',
    employmentType: '',
    industry: '',
    salary: '',
    location: '',
    StartDate: '',
    EndDate: '',
  });
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user ? user.id : '';

  // Construct the payload object
  const payload = {
    education: educationList.map((item) => ({
      institute: item.institute,
      degree: item.degree,
      specialization: item.specialization,
      StartDate: item.StartDate,
      EndDate: item.EndDate,
      skills: item.skills || [],
    })),
    skills: skills,
    workExperience: workExperiencelist.map((item) => ({
      company: item.company,
      jobTitle: item.jobTitle,
      employmentType: item.employmentType,
      industry: item.industry,
      salary: item.salary,
      location: item.location,
      StartDate: item.StartDate,
      EndDate: item.EndDate,
    })),
  };

  // Use FormData to send the file + JSON
  const formData = new FormData();
  formData.append('resume', resume); // resume should be a File object from <input type='file' />

  // Append payload as JSON string
  formData.append('data', JSON.stringify(payload));

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/profileUpdate/${userid}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log('Submitted successfully:', res.data);
     if (res.data?.user?.resume) {
      setResumeUrl(res.data.user.resume); // e.g. "/uploads/resume/1725973523567.pdf"
      console.log('Resume URL:', res.data.user.resume);
    }
    alert('Profile updated successfully!');
  } catch (err) {
    console.error('Error submitting form:', err);
  }
};



 

  return (
    <div>
      {/* Heading */}
      <div className='py-4 flex justify-between flex-wrap items-center'>
        <div>
          <p className='font-medium text-[18px] text-[#1C2638]'>Basic Information</p>
          <p className='font-normal text-[16px] text-[#A0A0A0]'>This information will be displayed publicly.</p>
        </div>
        <div className='p-2 rounded-full border border-[#DEE0E4] cursor-pointer'>
          <PiPencilSimpleLine className='w-5 h-5' />
        </div>
      </div>
      {/* Education Details */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className='flex-1'>Education Details</div>
        <div className='flex-1'>
        <form className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Institute/University</label>
              <input
              name="institute"
              value={educationdetail.institute }
                onChange={(e) => handleChange(e)} 
             
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter your university name'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Degree</label>
                <input
                name='degree'
                value={educationdetail.degree}
                onChange={(e) => handleChange(e)}
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Specialization</label>
                <input
                name='specialization'
                value={educationdetail.specialization}
                onChange={(e) => handleChange(e)}
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your specialization'
                />
              </div>
            </div>


            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Start Date</label>
                <input
                name='StartDate'
                value={educationdetail.StartDate}
                onChange={(e) => handleChange(e)}
                  type="date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">End Date</label>
                <input
                name='EndDate'
                value={educationdetail.EndDate}
                onChange={(e) => handleChange(e)}
                  type="date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
            </div>
            <div>
             <button
  type="button"
  onClick={handleAddEducation}
  className="flex justify-end items-center gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right"
>
  <IoAdd className='text-[#4640DE] w-6 h-6' />
  Add Education
</button>
            </div>
          </form>
        </div>
      </div>

      <div className='flex w-full my-10'>
        <div className='w-4/12 font-semibold text-[16px] text-[#4640DE]'>
          Institute Name
        </div>
        <div className='w-2/12 font-semibold text-[16px] text-[#4640DE]'>
          Degree
        </div>
        <div className='w-2/12 font-semibold text-[16px] text-[#4640DE]'>
          Specialization
        </div>
        <div className='w-2/12 font-semibold text-[16px] text-[#4640DE]'>
          Start Date
        </div>
        <div className='w-2/12 font-semibold text-[16px] text-[#4640DE]'>
          End Date
        </div>
      </div>
      {educationList.map((edu, index) => (
  <div key={index} className='flex w-full my-2'>
    <div className='w-4/12 text-[15px] text-gray-800'>{edu.institute}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{edu.degree}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{edu.specialization}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{edu.StartDate}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{edu.EndDate}</div>
  </div>
))}


      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Skills */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className="flex-1">Skills</div>
        <div className="flex flex-wrap gap-3 flex-1">
          {Array.isArray(skills) &&
           skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center border border-[#DEE0E4] text-[#4640DE] px-3 py-2 text-[16px]"
            >
              {skill}
              <button
                className="ml-2 font-bold text-[#4640DE]"
                onClick={() => removeSkill(index)}
              >
                <IoClose />
              </button>
            </div>
          ))}

          <div className="flex items-center border border-[#DEE0E4] text-[#4640DE] px-3 py-2 text-[16px]">
            <input
              type="text"
              className="outline-none w-fit bg-transparent"
              placeholder="Add new skills"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addSkill()}
             
            />
            <button
              className="ml-2 font-bold text-[#4640DE]"
              onClick={addSkill}
            >
              <IoAdd />
            </button>
          </div>
        </div>
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Work experience */}
      <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
        <div className="flex-1">Work Experience</div>
        <div className='flex-1'>
          <form action="" className=' grid gap-6'>
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Job Title</label>
                <input
                name='jobTitle'
                value={workdetail.jobTitle}
                onChange={(e) => handleChange(e)}
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Company</label>
                <input
                name='company'
                value ={workdetail.company}
                onChange={(e) => handleChange(e)}
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your specialization'
                />
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Employment Type</label>
                <input
                  type="text"
                  name='employmentType'
                  value={workdetail.employmentType}
                  onChange={(e) => handleChange(e)}
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Industry</label>
                <input
                  type="text"
                  name='industry'
                  value={workdetail.industry}
                  onChange={(e)=>handleChange(e)}
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your specialization'
                />
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Salary(Annually)</label>
                <input
                  type="text"
                  name='salary'
                  value={workdetail.salary}

                  onChange={(e) => handleChange(e)}
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Location</label>
                <input
                  type="text"
                  name='location'
                  value={workdetail.location}
                  onChange={(e) => handleChange(e)}
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your specialization'
                />
              </div>
            </div>


            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Start Date</label>
                <input

                  name='StartDate'
                  value={workdetail.StartDate}
                  onChange={(e) => handleChange(e)}
                  type="date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">End Date</label>
                <input
                  type="date"
                  name='EndDate'
                  value={workdetail.EndDate}
                  onChange={(e) => handleChange(e)}
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
            </div>

           
           <div>
  <button
    type="button" // ✅ prevent form submission
    onClick={handleWorkexperience}
    className="flex justify-end items-center flex-wrap gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right"
  >
    <IoAdd className="text-[#4640DE] w-6 h-6" />
    Add Experience
  </button>
</div>
          </form>
        </div>

      </div>
      <div className='flex w-full my-2'>
        <div className='w-3/12 font-semibold text-[13px] text-[#4640DE]'>
         Job Title
        </div>
         <div className='w-2/12 font-semibold text-[13px] text-[#4640DE]'>
        Company
        </div>
        <div className='w-2/12 font-semibold text-[13px] text-[#4640DE]'>
          Employment Type
        </div>
        <div className='  w-1/12 font-semibold text-[13px] text-[#4640DE]'>
         Industry
        </div>
        <div className='w-2/12 font-semibold text-[13px] text-[#4640DE]'>
          Start Date
        </div>
        <div className='w-2/12 font-semibold text-[13px] text-[#4640DE]'>
          End Date
        </div>
        <div  className='w-1/12 font-semibold text-[13px] text-[#4640DE]'>
          Salary
        </div>
        <div  className='w-2/12 font-semibold text-[13px] text-[#4640DE]'> 
          Location
        </div>
      </div>
     {workExperiencelist.map((exp, index) => (
  <div key={index} className='flex w-full my-2'>
    <div className='w-3/12 text-[15px] text-gray-800'>{exp.jobTitle}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{exp.company}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{exp.employmentType}</div>
    <div className='w-1/12 text-[15px] text-gray-800'>{exp.industry}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{exp.StartDate}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{exp.EndDate}</div>
    <div className='w-1/12 text-[15px] text-gray-800'>{exp.salary}</div>
    <div className='w-2/12 text-[15px] text-gray-800'>{exp.location}</div>
  </div>
))}

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Certificates */}
      {/* <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
        <div className="flex-1">Certificates</div>
        <div className='flex-1'>
          <form action="" className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Certification Name</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter your university name'
              />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">Issue Organization</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter your university name'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Start Date</label>
                <input
                  type="date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">End Date</label>
                <input
                  type="date"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                />
              </div>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" />
              <p>This certificate does not expire</p>
            </div>
            <div>
              <div className='flex justify-end items-center flex-wrap gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right'>
                <IoAdd className='text-[#4640DE] w-6 h-6' />
                <button className=''>Add Certificate</button>
              </div>
            </div>
          </form>
        </div>

      </div> */}

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Social Links */}
      {/* <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
        <div className="flex-1">Social Links</div>
        <div className='flex-1'>
          <form action="" className=' grid gap-6'>
            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">LinkedIn</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter Linkedin profile link'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Behance/Github/Dribble</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Behance/Github/Dribble link'
                />
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Portfolio Link</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Portfolio Link'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Instagram Link</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your Instagram Link'
                />
              </div>
            </div>

            <div>
              <div className='flex justify-end items-center flex-wrap gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right'>
                <IoAdd className='text-[#4640DE] w-6 h-6' />
                <button className=''>Add Social Links</button>
              </div>
            </div>
          </form>
        </div>
      </div> */}

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* languages */}
      {/* <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className="flex-1">Languages</div>
        <div className="flex flex-wrap gap-3 flex-1">
          {language.map((skill, index) => (
            <div
              key={index}
              className="flex items-center border border-[#DEE0E4] text-[#4640DE] px-3 py-2 text-[16px]"
            >
              {skill}
              <button
                className="ml-2 font-bold text-[#4640DE]"
                onClick={() => removelanguage(index)}
              >
                <IoClose />
              </button>
            </div>
          ))}

          <div className="flex items-center border border-[#DEE0E4] text-[#4640DE] px-3 py-2 text-[16px]">
            <input
              type="text"
              className="outline-none w-fit bg-transparent"
              placeholder="Add new language"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addSkill()}
            />
            <button
              className="ml-2 font-bold text-[#4640DE]"
              onClick={addlanguage}
            >
              <IoAdd />
            </button>
          </div>
        </div>
      </div> */}

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Resume */}
    <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
      <div className="flex-1">Resume</div>
      <div className='flex-1'>
        <form className='grid gap-6'>

          <div className='flex flex-wrap gap-3 items-center'>
            <label className='flex-1'>Attach your Video Introduction</label>
            <button
              type='button'
              className='flex-1 border border-dashed border-[#4640DE] text-[#4640DE] px-4 py-2 rounded flex items-center gap-2 justify-center text-sm'
            >
              <FiLink /> Attach video introduction
            </button>
          </div>

        <div className='flex flex-wrap gap-3 items-center'>
  <label className='flex-1'>Attach your resume</label>

  {/* Resume Upload Label */}
  <label
    htmlFor='resume-upload'
    className='flex-1 flex-col cursor-pointer border border-dashed border-[#4640DE] text-[#4640DE] px-4 py-2 rounded flex items-center gap-2 justify-center text-sm hover:bg-blue-50 transition'
  >
    <FiLink />

    {/* Show name if new resume selected OR show existing file name from DB */}
    {resume ? resume.name : resumeUrl ? (
      <a
        href={`${import.meta.env.VITE_BACKEND_URL}${resumeUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
        onClick={(e) => e.stopPropagation()} // ⛔ prevent label from triggering file input
      >
        {resumeUrl.split('/').pop()}
      </a>
    ) : (
      'Attach Resume/CV'
    )}
    <p className='underline'>Update resume</p>

    {/* Hidden Input */}
    <input
      type='file'
      id='resume-upload'
      accept='.pdf,.doc,.docx'
      className='hidden'
      onChange={(e) => setResume(e.target.files[0])}
    />
  </label>
</div>


        

          <div className='flex justify-end gap-3'>
            <button
              type='button'
              className='border border-gray-300 px-4 py-2 rounded text-sm text-gray-600 hover:bg-gray-100'
            >
              Cancel
            </button>
            <button
              type='submit'
              onClick={(e)=>handleSubmit(e)}
              className='bg-[#4640DE] text-white px-4 py-2 rounded text-sm hover:bg-[#4640DE]'
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>

    </div>



  )
}

export default Resume
