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
    icon: <FaUserCheck className="text-blue-600 text-4xl mb-2" />,
  },
  {
    id: 3,
    title: 'Companies',
    count: 200,
    icon: <FaBuilding className="text-blue-600 text-4xl mb-2" />,
  },
  {
    id: 4,
    title: 'Total Candidates',
    count: 800,
    icon: <FaGraduationCap className="text-blue-600 text-4xl mb-2" />,
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
    <div className='grid mx-5 sm:mx-8  md:mx-14 lg:mx-24 grid-cols-2 md:grid-cols-4 gap-4'>
      {initialData.map((item, index) => (
        <div
          key={item.id}
          className="relative  p-6 rounded-lg shadow-md hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] transition-all transform hover:scale-105 duration-500 bg-zinc-200 "
        >
          <div className="absolute top-0 left-0 w-full h-2 rounded-t-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
          <div className='flex justify-center'>{item.icon}</div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.title}</h4>
          <p className="text-2xl font-bold text-blue-600 text-center">
            {item.count}+
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

export default Counter;
