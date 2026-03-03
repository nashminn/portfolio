export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Placeholder avatar */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-300 text-8xl shadow-inner">
            👤
          </div>
        </div>

        <div>
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3">
            About Me
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Who I Am
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            I&apos;m a software developer with a passion for crafting clean,
            user-friendly applications. I enjoy turning complex problems into
            simple, elegant solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying the outdoors.
          </p>
          <a
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
