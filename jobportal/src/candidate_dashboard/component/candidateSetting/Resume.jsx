import React, { useState } from 'react'
import { IoAdd, IoClose } from 'react-icons/io5'
import { PiPencilSimpleLine } from "react-icons/pi";
import { FaBold, FaItalic, FaListUl, FaListOl, FaSmile } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

function Resume() {
  const [skills, setSkills] = useState([
    'Time Management',
    'Typography',
    'Creativity',
    'Design Principles',
    'Brand Identity',
    'Brand Identity',
    'Brand Identity',
    'Brand Identity',
  ]);

    const [language, setLanguage] = useState([
    'English',
    'Hindi',
    'Tamil',
    'Spanish',

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
    setNewSkill('');
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
          <form action="" className=' grid gap-6'>
            <div className='flex flex-col'>
              <label htmlFor="">Institute/University</label>
              <input
                type="text"
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                placeholder='Enter your university name'
              />
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Degree</label>
                <input
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Specialization</label>
                <input
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
            <div>
              <div className='flex justify-end items-center flex-wrap gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right'>
                <IoAdd className='text-[#4640DE] w-6 h-6' />
                <button className=''>Add Education</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Skills */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
        <div className="flex-1">Skills</div>
        <div className="flex flex-wrap gap-3 flex-1">
          {skills.map((skill, index) => (
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
                  type="text"
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Company</label>
                <input
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
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Industry</label>
                <input
                  type="text"
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
                  className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0]'
                  placeholder='Enter your degree'
                />
              </div>
              <div className='flex flex-col flex-1'>
                <label htmlFor="">Location</label>
                <input
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

            <div className=''>
              <textarea
                rows={5}
                name=""
                id=""
                className='border border-[#DEE0E4] p-3 placeholder:font-normal placeholder:text-[14px] placeholder:text-[#A0A0A0] w-full'
                placeholder='Terms and conditions goes here...'
              />
              <div className='flex justify-between'>
                <p className='text-[#A0A0A0] font-normal text-[14px]'>Minimum 250 characters</p>
                <p className='font-normal text-[14px] text-[#1C2638]'>0/500</p>
              </div>
            </div>
            <div>
              <div className='flex justify-end items-center flex-wrap gap-2.5 border border-[#4640DE] text-[#4640DE] font-medium text-[18px] px-4 py-3 cursor-pointer w-fit float-right'>
                <IoAdd className='text-[#4640DE] w-6 h-6' />
                <button className=''>Add Experience</button>
              </div>
            </div>
          </form>
        </div>

      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Certificates */}
      <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
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

      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* Social Links */}
      <div className="flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0">
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
      </div>

      <div className='border-b-1 border-[#DEE0E4]'></div>

      {/* languages */}
      <div className='flex flex-col md:flex-row justify-between py-4 gap-3 md:gap-0'>
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
      </div>

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
            <button
              type='button'
              className='flex-1 border border-dashed border-[#4640DE] text-[#4640DE] px-4 py-2 rounded flex items-center gap-2 justify-center text-sm'
            >
              <FiLink /> Attach Resume/CV
            </button>
          </div>

          <div className='flex justify-end'>
            <button
              type='button'
              className='border border-[#4640DE] text-[#4640DE] px-4 py-2 rounded text-sm flex items-center gap-1'
            >
              <span className="text-xl"><IoAdd/></span> Add new resume
            </button>
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
