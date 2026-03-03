export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Hi, I&apos;m <span className="text-indigo-600">Your Name</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          A passionate full-stack developer who loves building beautiful,
          performant web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
