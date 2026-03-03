const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML & CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL'],
  },
  {
    category: 'Tools & Other',
    skills: ['Git', 'Docker', 'AWS', 'Figma', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          What I Know
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-indigo-600 mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
