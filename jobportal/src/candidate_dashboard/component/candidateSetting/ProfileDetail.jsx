import React from 'react'

function ProfileDetail({data}) {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h2 className="text-3xl font-semibold text-gray-800">{data.name}</h2>
        {/* <p className="text-sm text-gray-500 capitalize">{userType} • {isVerified ? 'Verified' : 'Not Verified'}</p> */}
        {/* <p className="text-xs text-gray-400 mt-1">Last login: {new Date(lastLogin).toLocaleString()}</p> */}
      </div>

      {/* Personal Info */}
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><span className="font-medium">Email:</span> {data.email}</div>
          <div><span className="font-medium">Phone:</span> {data.phone || 'N/A'}</div>
          <div><span className="font-medium">Gender:</span> {data.gender || 'N/A'}</div>
          {/* <div><span className="font-medium">Date of Birth:</span> {data.dateOfBirth. }</div> */}
        </div>
      </div>

      {/* Address Info */}
      <div>
        <h3 className="text-xl font-bold text-gray-700 mb-4">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><span className="font-medium">Country:</span> {data.address?.country || 'N/A'}</div>
          <div><span className="font-medium">State:</span> {data.address?.state || 'N/A'}</div>
          <div><span className="font-medium">City:</span> {data.address?.city || 'N/A'}</div>
          <div><span className="font-medium">Pincode:</span> {data.address?.pincode || 'N/A'}</div>
          <div><span className="font-medium">Address Line 1:</span> {data.address?.address1 || 'N/A'}</div>
          <div><span className="font-medium">Address Line 2:</span> {data.address?.address2 || 'N/A'}</div>
        </div>
      </div>

      {/* Candidate Applied Jobs */}
      {/* {userType === 'candidate' && (
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Applied Jobs</h3>
          {applied.length > 0 ? (
            <ul className="space-y-3 text-sm">
              {applied.map((item, idx) => (
                <li key={idx} className="bg-blue-50 p-4 rounded-md border border-blue-200">
                  <p><span className="font-medium">Job ID:</span> {item.job}</p>
                  <p><span className="font-medium">Status:</span> {item.status}</p>
                  <p><span className="font-medium">Applied At:</span> {new Date(item.appliedAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No job applications yet.</p>
          )}
        </div>
      )} */}

      {/* Saved Jobs */}
      {/* {userType === 'candidate' && (
        <div>
          <h3 className="text-xl font-bold text-gray-700 mb-4">Saved Jobs</h3>
          {savedJobs.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-gray-700">
              {savedJobs.map((jobId, idx) => (
                <li key={idx}>Job ID: {jobId}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No saved jobs yet.</p>
          )}
        </div>
      )} */}
    </div>
  )
}

export default ProfileDetail