import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to a form service (e.g. Formspree, EmailJS)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-3 text-center">
          Get In Touch
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold mb-2">Thanks for reaching out!</p>
            <p>I&apos;ll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors self-start shadow-lg"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Social links */}
        <div className="flex justify-center gap-8 mt-12 text-gray-500">
          <a href="https://github.com" className="hover:text-indigo-600 transition-colors font-medium">
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-indigo-600 transition-colors font-medium">
            LinkedIn
          </a>
          <a href="mailto:you@example.com" className="hover:text-indigo-600 transition-colors font-medium">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
