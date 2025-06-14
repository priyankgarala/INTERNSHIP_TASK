const testimonials = [
  {
    name: 'Name',
    role: 'Company / Designation',
    feedback:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Name',
    role: 'Company / Designation',
    feedback:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Name',
    role: 'Company / Designation',
    feedback:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center md:text-start">Testimonials</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 relative rounded-xl shadow-md px-6 pt-16 pb-6 text-start"
          >
            {/* Avatar */}
            <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow"
              />
            </div>

            {/* Content */}
            <p className="text-sm text-gray-700 mb-4">{t.feedback}</p>
            <h4 className="font-bold">{t.name}</h4>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex md:justify-end justify-end gap-4 mt-10">
        <button className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
