import React from 'react'

function ProfileDetail({data}) {
  return (
   <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
  {/* Header */}
  <div className="text-center border-b pb-4">
    <h2 className="text-3xl font-semibold text-gray-800">{data.firstname} {data.lastname}</h2>
    <p className="text-sm text-gray-500 capitalize">{data.profile || 'N/A'}</p>
  </div>

  {/* Personal Info */}
  <div>
    <h3 className="text-xl font-bold text-gray-700 mb-4">Personal Information</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div><span className="font-medium">Email:</span> {data.email}</div>
      <div><span className="font-medium">Phone:</span> {data.phone || 'N/A'}</div>
      <div><span className="font-medium">Date of Birth:</span> {data.dob || 'N/A'}</div>
      <div><span className="font-medium">Gender:</span> {data.gender || 'N/A'}</div>
      <div><span className="font-medium">LinkedIn:</span> 
        <a href={data.linkedProfile} className="text-blue-600 ml-1 underline" target="_blank" rel="noreferrer">
          View
        </a>
      </div>
      <div><span className="font-medium">Portfolio:</span> 
        <a href={data.portfolio} className="text-blue-600 ml-1 underline" target="_blank" rel="noreferrer">
          View
        </a>
      </div>
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
</div>

  )
}

export default ProfileDetail