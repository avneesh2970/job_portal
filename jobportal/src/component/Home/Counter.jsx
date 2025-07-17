import React, { useEffect, useState } from 'react';
import { FaUserTie, FaBuilding, FaGraduationCap, FaUserCheck } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const initialData = [
  {
    id: 1,
    title: 'Placement',
    count: 1000,
    icon: <FaUserTie className="text-blue-600 text-4xl mb-2" />,
  },
  {
    id: 2,
    title: 'Internship',
    count: 500,
    icon: <FaUserCheck className="text-violet-600 text-4xl mb-2" />,
  },
  {
    id: 3,
    title: 'Companies',
    count: 200,
    icon: <FaBuilding className="text-indigo-600 text-4xl mb-2" />,
  },
  {
    id: 4,
    title: 'Students Placed',
    count: 800,
    icon: <FaGraduationCap className="text-green-600 text-4xl mb-2" />,
  },
];

function Counter() {
 const { ref, inView } = useInView({ triggerOnce: true });
const [hasStarted, setHasStarted] = useState(false);
const [animatedCounts, setAnimatedCounts] = useState(initialData.map(() => 0));

  useEffect(() => {
  if (inView && !hasStarted) {
    setHasStarted(true);
    const intervals = initialData.map((item, index) => {
      const increment = Math.ceil(item.count / 100);
      return setInterval(() => {
        setAnimatedCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < item.count) {
            updated[index] = Math.min(updated[index] + increment, item.count);
          }
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }
}, [inView, hasStarted]);

  return (
    <section ref={ref} className="min-h-[300px] my-24">
  <div className='flex justify-center flex-col w-full'>
    <h3 className='text-center font-bold text-4xl py-8'>Our Achievements</h3>
    <div className='grid grid-cols-1 mx-24 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      {initialData.map((item, index) => (
        <div
          key={item.id}
          className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-110 duration-500 bg-gradient-to-t from-blue-300 via-indigo-200 to-violet-200"
        >
          <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
          <div className='flex justify-center'>{item.icon}</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.title}</h4>
          <p className="text-2xl font-bold text-blue-600 text-center">
            {animatedCounts[index]}+
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Counter;
