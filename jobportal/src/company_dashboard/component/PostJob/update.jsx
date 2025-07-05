import React ,  { useState, useEffect } from "react"
import { FaArrowLeft, FaSpinner } from "react-icons/fa"
import bag from "../../assets/image/bag.png"
import note from "../../assets/image/note.png"
import smile from "../../assets/image/smile.png"
import text from "../../assets/image/text-bold.png"
import textone from "../../assets/image/italic.png"
import left from "../../assets/image/number.png"
import right from "../../assets/image/list.png"
import link from "../../assets/image/link.png"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const JobUpdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  // Step 1 states
  const [jobTitle, setTitle] = useState("")
  const [employmentType, setEmploymentType] = useState([])
  const [sallery, setSallery] = useState(1000)
  const [categories, setCategories] = useState("")
  const [requiredSkills, setRequiredSkills] = useState([])
  const [input, setInput] = useState("")

  // Step 2 states
  const [jobDescription, setJobDescription] = useState("")
  const [skillsAndExperience, setSkillsAndExperience] = useState("")
  const [responsibilities, setResponsibilities] = useState("")

  // Step 3 states
  const [companyLogo, setCompanyLogo] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [location, setLocation] = useState("")
  const [employeeStrength, setEmployeeStrength] = useState("")
  const [industry, setIndustry] = useState("")
  const [technology, setTechnology] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [aboutCompany, setAboutCompany] = useState("")

  // Character counts
  const charCount1 = jobDescription.length
  const charCount2 = skillsAndExperience.length
  const charCount3 = responsibilities.length
  const charCount = aboutCompany.length

  // Navigation functions
  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  // Skills functions
  const handleAddSkill = () => {
    if (input.trim() !== "" && !requiredSkills.includes(input.trim())) {
      setRequiredSkills([...requiredSkills, input.trim()])
      setInput("")
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    setRequiredSkills(requiredSkills.filter((skill) => skill !== skillToRemove))
  }

  // Employment type function
  const handleEmploymentTypeChange = (e) => {
    const { value, checked } = e.target

    if (checked) {
      setEmploymentType((prev) => [...prev, value])
    } else {
      setEmploymentType((prev) => prev.filter((type) => type !== value))
    }
  }

  // Fetch job data
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/` + id)
      .then((result) => {
        console.log(result)
        setTitle(result.data.jobTitle)
        setEmploymentType(result.data.employmentType)
        setSallery(result.data.sallery)
        setCategories(result.data.categories)
        setRequiredSkills(result.data.requiredSkills)
        setJobDescription(result.data.jobDescription)
        setSkillsAndExperience(result.data.skillsAndExperience)
        setResponsibilities(result.data.responsibilities)
        setCompanyLogo(result.data.companyLogo)
        setCompanyName(result.data.companyName)
        setWebsiteUrl(result.data.websiteUrl)
        setLocation(result.data.location)
        setEmployeeStrength(result.data.employeeStrength)
        setIndustry(result.data.industry)
        setDay(result.data.day)
        setMonth(result.data.month)
        setYear(result.data.year)
        setTechnology(result.data.technology)
        setAboutCompany(result.data.aboutCompany)
      })
      .catch((err) => console.log(err))
  }, [id])

  // Update job
  const update = (e) => {
    e.preventDefault()
    if (step !== 3) return
    setLoading(true)

    try {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/` + id, {
          jobTitle,
          employmentType,
          sallery,
          categories,
          requiredSkills,
          jobDescription,
          responsibilities,
          skillsAndExperience,
          companyLogo,
          companyName,
          websiteUrl,
          location,
          employeeStrength,
          industry,
          technology,
          aboutCompany,
          day,
          month,
          year,
        })
        .then((result) => {
          console.log(result)
          navigate("/viewjob")
        })
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // Progress indicator component
  const ProgressIndicator = () => (
    <div className="flex items-center mb-10 justify-evenly flex-wrap gap-4">
      <div className="flex items-center font-medium">
        <div
          className={`w-10 h-10 rounded-full ${step === 1 ? "bg-[#4640DE]" : "bg-gray-300"} flex items-center justify-center mr-2`}
        >
          <img src={bag || "/placeholder.svg"} alt="" className="h-6" />
        </div>
        <div className={`text-sm ${step === 1 ? "text-[#4640DE]" : "text-gray-300"}`}>
          <p>Step 1/3</p>
          <p>Job Information</p>
        </div>
      </div>

      <div className="flex items-center font-medium">
        <div
          className={`w-10 h-10 rounded-full ${step === 2 ? "bg-[#4640DE]" : "bg-gray-300"} flex items-center justify-center mr-2`}
        >
          <img src={note || "/placeholder.svg"} alt="" className="h-6" />
        </div>
        <div className={`text-sm ${step === 2 ? "text-[#4640DE]" : "text-gray-300"}`}>
          <p>Step 2/3</p>
          <p>Job Description</p>
        </div>
      </div>

      <div className="flex items-center font-medium">
        <div
          className={`w-10 h-10 rounded-full ${step === 3 ? "bg-[#4640DE]" : "bg-gray-300"} flex items-center justify-center mr-2`}
        >
          <img src={bag || "/placeholder.svg"} alt="" className="h-6" />
        </div>
        <div className={`text-sm ${step === 3 ? "text-[#4640DE]" : "text-gray-300"}`}>
          <p>Step 3/3</p>
          <p>Company Information</p>
        </div>
      </div>
    </div>
  )

  // Header component
  const Header = () => (
    <div className="flex items-center text-gray-600 hover:text-purple-600 mb-7 cursor-pointer">
      <FaArrowLeft className="mr-3" />
      <h2 className="text-2xl font-semibold text-gray-800">Update Job</h2>
    </div>
  )

  // Rich text editor toolbar
  const TextEditorToolbar = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-3 py-2 text-gray-600 text-sm">
      <div className="flex gap-2 sm:gap-3 flex-wrap mb-2 sm:mb-0 w-full sm:w-auto justify-center sm:justify-start">
        <button type="button" aria-label="Insert emoji" className="p-1">
          <img src={smile || "/placeholder.svg"} alt="emoji" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button type="button" aria-label="Bold text" className="p-1">
          <img src={text || "/placeholder.svg"} alt="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button type="button" aria-label="Italic text" className="p-1">
          <img src={textone || "/placeholder.svg"} alt="italic" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button type="button" aria-label="List" className="p-1">
          <img src={right || "/placeholder.svg"} alt="list" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button type="button" aria-label="Numbered list" className="p-1">
          <img src={left || "/placeholder.svg"} alt="numbered list" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button type="button" aria-label="Insert link" className="p-1">
          <img src={link || "/placeholder.svg"} alt="link" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
      <div className="text-xs text-gray-500 w-full sm:w-auto text-center sm:text-right mt-1 sm:mt-0">
        Minimum 250 characters
      </div>
    </div>
  )

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <Header />
          <ProgressIndicator />

          {/* STEP 1: JOB INFORMATION */}
          {step === 1 && (
            <>
              <div className="bg-white rounded-lg">
                <h3 className="text-lg font-medium text-gray-700">Basic Information</h3>
                <p className="text-gray-500 mb-5">This information will be displayed publicly</p>
                <hr className="text-gray-300 my-5" />

                {/* Job Title */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <h1 className="font-semibold">Job Title</h1>
                    <p className="text-gray-500">Job titles must describe one position</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer"
                      className="w-full border border-gray-300 p-3 rounded-md placeholder-gray-400"
                      onChange={(e) => setTitle(e.target.value)}
                      value={jobTitle}
                    />
                    <p className="text-xs text-gray-400 mt-1">At least 80 characters</p>
                  </div>
                </div>

                {/* Employment Type */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <p className="font-semibold">Type of Employment</p>
                    <p className="text-gray-500">You can select multiple type of employment</p>
                  </div>
                  <div className="w-full md:w-2/3 space-y-2">
                    {["Full-time", "Part-time", "Remote", "Internship", "Contract"].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={type}
                          onChange={handleEmploymentTypeChange}
                          className="form-checkbox text-purple-600"
                          checked={employmentType.includes(type)}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <p className="font-semibold">Salary</p>
                    <p className="text-gray-500 mb-2">Please specify the estimated salary range for the role.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 font-medium">₹ 0</span>
                      <input
                        type="range"
                        min="0"
                        max="15000"
                        className="flex-grow"
                        value={sallery}
                        onChange={(e) => setSallery(e.target.value)}
                      />
                      <span className="text-sm text-gray-500 font-medium">₹ 15,000</span>
                    </div>
                    <p className="font-semibold text-right mt-2">Selected Salary: ₹ {sallery}</p>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <p className="font-semibold">Categories</p>
                    <p className="text-gray-500">You can select multiple job categories</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <select
                      className="w-full border border-gray-300 p-3 rounded-md text-gray-600"
                      onChange={(e) => setCategories(e.target.value)}
                      value={categories}
                    >
                      <option value="">Select Job Category</option>
                      <option value="Job1">Select Job1</option>
                      <option value="Job2">Select Job2</option>
                      <option value="Job3">Select Job3</option>
                      <option value="Job4">Select Job4</option>
                    </select>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3">
                    <p className="font-semibold">Required Skills</p>
                    <p className="text-gray-500">Add required skills for the job</p>
                  </div>

                  <div className="w-full md:w-2/3">
                    <div className="mb-2 flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter a skill"
                        className="border border-gray-300 p-3 rounded-md text-gray-600 flex-grow"
                      />

                      <button
                        type="button"
                        onClick={handleAddSkill}
                        className="border border-purple-500 text-purple-600 px-4 py-2 text-sm rounded hover:bg-purple-50"
                      >
                        + Add Skills
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {requiredSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center text-[#4640DE] px-3 py-1 rounded-full text-sm border border-gray-500"
                        >
                          {skill}
                          <span className="ml-2 text-gray-400 cursor-pointer" onClick={() => handleRemoveSkill(skill)}>
                            ✕
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 2: JOB DESCRIPTION */}
          {step === 2 && (
            <>
              <div className="bg-white rounded-lg">
                <div>
                  <h1 className="text-xl font-semibold">Details</h1>
                  <p className="text-gray-500">
                    Add the description of the job, responsibilities and Skill & Experience.
                  </p>
                </div>
                <hr className="text-gray-300 my-5" />

                {/* Job Description */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-semibold">Job Description</h1>
                    <p className="text-gray-500 mt-2">Job titles must describe one position</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="border border-gray-300 rounded-md">
                      <textarea
                        className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                        placeholder="Enter job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        maxLength={500}
                        aria-label="Job description"
                      ></textarea>
                      <TextEditorToolbar />
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">{charCount1}/500</div>
                  </div>
                </div>

                {/* Skills & Experience */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-semibold">Skills & experiences</h1>
                    <p className="text-gray-500 mt-2">Outline the core skills and experiences of the position.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="border border-gray-300 rounded-md">
                      <textarea
                        className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                        placeholder="Enter skills and experiences required"
                        value={skillsAndExperience}
                        onChange={(e) => setSkillsAndExperience(e.target.value)}
                        maxLength={500}
                        aria-label="Skills and experiences"
                      ></textarea>
                      <TextEditorToolbar />
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">{charCount2}/500</div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h1 className="text-xl font-semibold">Responsibilities</h1>
                    <p className="text-gray-500 mt-2">Outline the core responsibilities of the position.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="border border-gray-300 rounded-md">
                      <textarea
                        className="w-full h-32 p-3 resize-none border-b border-gray-300 focus:outline-none"
                        placeholder="Enter job responsibilities"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        maxLength={500}
                        aria-label="Job responsibilities"
                      ></textarea>
                      <TextEditorToolbar />
                    </div>
                    <div className="text-right text-sm text-gray-500 mt-1">{charCount3}/500</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 3: COMPANY INFORMATION */}
          {step === 3 && (
            <>
              <div className="bg-white rounded-lg">
                <div>
                  <h1 className="text-xl font-semibold">Details</h1>
                  <p className="text-gray-500">
                    Add the description of the job, responsibilities and Skill & Experience.
                  </p>
                </div>
                <hr className="text-gray-300 my-5" />

                {/* Company Logo Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold text-gray-700">Company Logo</h2>
                    <p className="text-gray-500 text-sm">This image will be shown publicly as company logo.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-col sm:flex-row gap-5">
                      {companyLogo && (
                        <img
                          src={companyLogo || "/placeholder.svg"}
                          alt="Company Logo"
                          className="w-20 h-20 object-contain"
                        />
                      )}
                      <div className="flex-grow">
                        <label htmlFor="logoUrl" className="block text-gray-700 text-sm font-medium mb-1">
                          Company Logo URL
                        </label>
                        <input
                          id="logoUrl"
                          type="url"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Enter your logo url"
                          value={companyLogo}
                          onChange={(e) => setCompanyLogo(e.target.value)}
                          aria-label="logo URL"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Details Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold text-gray-700">Company Details</h2>
                    <p className="text-gray-500 text-sm">
                      Introduce your company core info quickly to users by filling up company details
                    </p>
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <div>
                      <label htmlFor="companyName" className="block text-gray-700 text-sm font-medium mb-1">
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        aria-label="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="websiteUrl" className="block text-gray-700 text-sm font-medium mb-1">
                        Website URL
                      </label>
                      <input
                        id="websiteUrl"
                        type="url"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your company URL"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        aria-label="Website URL"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        aria-label="Location"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="employeeStrength" className="block text-gray-700 text-sm font-medium mb-1">
                          Employee Strength
                        </label>
                        <input
                          id="employeeStrength"
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Enter the employee strength"
                          value={employeeStrength}
                          onChange={(e) => setEmployeeStrength(e.target.value)}
                          aria-label="Employee strength"
                        />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block text-gray-700 text-sm font-medium mb-1">
                          Industry
                        </label>
                        <input
                          id="industry"
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Belong to which industry"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          aria-label="Industry"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Date Founded</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <input
                          id="foundedDay"
                          type="number"
                          min="1"
                          max="31"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Day"
                          value={day}
                          onChange={(e) => setDay(e.target.value)}
                          aria-label="Day founded"
                        />
                        <input
                          id="foundedMonth"
                          type="number"
                          min="1"
                          max="12"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Month"
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          aria-label="Month founded"
                        />
                        <input
                          id="foundedYear"
                          type="number"
                          min="1900"
                          max="2050"
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="Year"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          aria-label="Year founded"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="technology" className="block text-gray-700 text-sm font-medium mb-1">
                        Technology
                      </label>
                      <input
                        id="technology"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Using which technology"
                        value={technology}
                        onChange={(e) => setTechnology(e.target.value)}
                        aria-label="Technology"
                      />
                    </div>
                  </div>
                </div>

                {/* About Company Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold text-gray-700">About Company</h2>
                    <p className="text-gray-500 text-sm">Brief description for your company. URLs are hyperlinked.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <textarea
                      id="aboutCompany"
                      className="w-full p-2 border border-gray-300 rounded-md h-32"
                      placeholder="Enter description"
                      maxLength={250}
                      value={aboutCompany}
                      onChange={(e) => setAboutCompany(e.target.value)}
                      aria-label="About company"
                    ></textarea>
                    <p className="text-gray-500 text-xs mt-1">Maximum 250 characters {charCount}/250</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between mt-6">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-[#4640DE] text-white rounded-md hover:bg-[#3530b3] transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={update}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center min-w-24"
                disabled={loading}
              >
                {loading ? <FaSpinner className="animate-spin h-5 w-5" /> : "Update"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default JobUpdate
