export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Hello, I'm Jane Doe</h1>
        <p className="mt-2 text-lg text-gray-600">
          A UI/UX Designer passionate about creating intuitive and accessible digital experiences.
        </p>
      </header>

      <nav className="mb-12">
        <ul className="flex space-x-6 text-blue-600 font-medium">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <p className="text-gray-700">Coming soon...</p>
      </section>

      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-prose">
          I specialize in designing accessible, user-friendly interfaces. My passion lies in solving real-world
          problems through thoughtful design.
        </p>
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700">
          Feel free to reach out via <a href="mailto:jane@example.com" className="text-blue-600 underline">email</a>.
        </p>
      </section>
    </main>
  );
}
