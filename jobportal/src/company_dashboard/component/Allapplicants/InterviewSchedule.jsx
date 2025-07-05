import React from "react";
import { FaPen } from "react-icons/fa";


const interviewData = [
  {
    date: "Tomorrow - 21 March, 2025",
    interviews: [
      {
        name: "John Mayer",
        type: "Written Test",
        time: "10:00 AM - 11:30 AM",
        location: "Online",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        name: "Ally Wales",
        type: "Written Test",
        time: "10:00 AM - 11:30 AM",
        location: "Silver Crystal Room, Nomad",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      },
    ],
  },
  {
    date: "24 March, 2025",
    interviews: [
      {
        name: "Jerome Bell",
        type: "Skill Test",
        time: "10:00 AM - 11:30 AM",
        location: "Online",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      {
        name: "Joe Bartmann",
        type: "Written Test 2",
        time: "10:00 AM - 11:30 AM",
        location: "Silver Crystal Room, Nomad",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      },
    ],
  },
  {
    date: "27 March, 2025",
    interviews: [
      {
        name: "Allison Geidt",
        type: "Skill Test",
        time: "10:00 AM - 11:30 AM",
        location: "Online",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      },
    ],
  },
];

const InterviewSchedule = () => {
  return (
    <div className="p-6 bg-white rounded shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Interview List</h2>
        <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          + Add Schedule Interview
        </button>
      </div>

      {interviewData.map((group, idx) => (
        <div key={idx} className="mb-8">
          <h3 className="text-sm text-gray-500 font-medium mb-4">{group.date}</h3>

          <div className="space-y-4">
            {group.interviews.map((interview, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={interview.avatar}
                    alt={interview.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{interview.name}</h4>
                    <p className="text-xs text-gray-500">{interview.type}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 w-1/4">
                  <p className="font-medium">{interview.time}</p>
                  <p className="text-xs text-gray-500">{interview.location}</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded text-indigo-600 hover:bg-indigo-50 transition">
                  <FaPen className="text-xs" /> Add Feedback
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterviewSchedule;
