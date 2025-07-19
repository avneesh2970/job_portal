import React,{useEffect, useState} from 'react';
import axios from 'axios';
const CompanyDetail = () => {
      const [companyLogo, setCompanyLogo] = useState("")
        const [companyName, setCompanyName] = useState("")
        const [externalApplyUrl, setExternalApplyUrl] = useState("")
        const [websiteUrl, setWebsiteUrl] = useState("")
        const [location, setLocation] = useState("")
        const [employeeStrength, setEmployeeStrength] = useState("")
        const [industry, setIndustry] = useState("")
        const [technology, setTechnology] = useState("")
        const [day, setDay] = useState("")
        const [month, setMonth] = useState("")
        const [year, setYear] = useState("")
        const [aboutCompany, setAboutCompany] = useState("")
        const [user_id, setuser_id] = useState('');
        console.log('companyLogo', companyLogo, 'companyName', companyName, 'externalApplyUrl', externalApplyUrl, 'websiteUrl', websiteUrl, 'location', location, 'employeeStrength', employeeStrength, 'industry', industry, 'technology', technology, 'day', day, 'month', month, 'year', year, 'aboutCompany', aboutCompany);
        const charCount = aboutCompany.length

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'));
           const user_email = user.email;
           const fetchdata = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/${user_email}/companyprofile`);
                console.log('response', response);
                if (response.data && response.data.companyProfile) {
                    const profile = response.data.companyProfile;
                    setCompanyLogo(profile.companyLogo || "");
                    setCompanyName(profile.companyName || "");
                    setExternalApplyUrl(profile.externalApplyUrl || "");
                    setWebsiteUrl(profile.websiteUrl || "");
                    setLocation(profile.location || "");
                    setEmployeeStrength(profile.employeeStrength || "");
                    setIndustry(profile.industry || "");
                    setTechnology(profile.technology || "");
                    setDay(profile.day || "");
                    setMonth(profile.month || "");
                    setYear(profile.year || "");
                    setAboutCompany(profile.aboutCompany || "");
                }
            } catch (error) {
                console.error("Error fetching company profile:", error);
            }
           }
           fetchdata();
        },[])


        const handleSubmit = async () => {
             const user = JSON.parse(localStorage.getItem('user'));
            const email = user.email;
            console.log('user email', email);
             const data  = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/job/jobpost/${email}/apply`,{
                owner_email: email,
                companyName,
                companyLogo,
                companyDescription: aboutCompany,
                externalApplyUrl,
                websiteUrl,
                location,
                employeeStrength,
                industry,
                technology,
                day,
                month,
                year,
                aboutCompany
            });
            alert('Company details submitted successfully');
            console.log('data', data);

        }
  return (
    <div>
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

                {/* company external uri to apply */}
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-semibold text-gray-700">External Apply URL</h2>
                    <p className="text-gray-500 text-sm">Provide a link for candidates to apply externally.</p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <input
                      type="url"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Enter external apply URL"
                      value={externalApplyUrl}
                      onChange={(e) => setExternalApplyUrl(e.target.value)}
                      aria-label="External Apply URL"
                    />
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
                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                     <div className="w-full md:w-1/3">
                     </div>
                     <div className='w-full md:w-2/3'>
                        <button className='px-2.5 w-full py-1.5 bg-blue-400 font-semibold text-gray-700 rounded-md' onClick={handleSubmit}>Submit </button>
                     </div>
                  </div>
              
              
              </div>

             
    </div>
  );
};

export default CompanyDetail;

