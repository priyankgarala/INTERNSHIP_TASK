'use client';

import {
  FaClock,
  FaWallet,
  FaUsers,
  FaBookOpen,
} from 'react-icons/fa';

const advantages = [
  {
    title: 'Save Time',
    desc: 'No more switching for packages or plans.',
    icon: <FaClock className="text-3xl text-[#00897B]" />,
  },
  {
    title: 'Save Money',
    desc: 'Compare, negotiate, and choose the best.',
    icon: <FaWallet className="text-3xl text-[#00897B]" />,
  },
  {
    title: 'Trusted Network',
    desc: 'A Trusted Network of 7000+ Travel Agents',
    icon: <FaUsers className="text-3xl text-[#00897B]" />,
  },
  {
    title: 'Multiple Options',
    desc: 'Itineraries & Travel Tips from Trusted Agents',
    icon: <FaBookOpen className="text-3xl text-[#00897B]" />,
  },
];

export default function Advantages() {
  return (
    <section className="py-14 text-center bg-[#6dcad4] text-white">
      <h2 className="text-3xl font-bold mb-2">Our Advantages</h2>
      <p className="mb-10 max-w-xl mx-auto text-sm">
        You can rely on our experience and the quality of services we provide.
        Here are other reasons to book tours at Treat Holidays
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {advantages.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-4"
          >
            {/* Icon in circular white background */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-white max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
