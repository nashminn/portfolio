const projects = [
  {
    title: 'Project One',
    description:
      'A brief description of what this project does and what problem it solves.',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Two',
    description:
      'A brief description of what this project does and what problem it solves.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'A brief description of what this project does and what problem it solves.',
    tags: ['Python', 'FastAPI', 'Docker'],
    liveUrl: '#',
    repoUrl: '#',
  },
]

function ProjectCard({ title, description, tags, liveUrl, repoUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col gap-4 border border-gray-100">
      {/* Placeholder image */}
      <div className="h-40 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-200 text-5xl">
        🖥
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        <a
          href={liveUrl}
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          Live Demo →
        </a>
        <a
          href={repoUrl}
          className="text-sm font-semibold text-gray-500 hover:underline"
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          My Work
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
