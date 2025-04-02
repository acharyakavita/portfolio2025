export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">Kavitha Acharya</h1>
        <nav>
          <a href="#about" className="mr-4">About</a>
          <a href="#Resume" className="mr-4">Resume</a>
          <a href="#projects" className="mr-4">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto mt-10 p-6">
        <section id="about" className="mb-10">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            I’m a <span className="font-semibold">Senior Software Engineer</span>
            with 12+ years of experience, specializing in full-stack development
            using TypeScript, Node.js, Next.js, and React.
            I excel in building scalable backend applications using Express,
            SQL/NoSQL databases, Redis, and GraphQL. My expertise spans UI development,
            REST API design, microservices, and cloud services.
            I have successfully delivered solutions across FinTech, eCommerce, Social Media Marketing,
            Insurance, and Real Estate industries.
          </p>
        </section>

        <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Developed an AI-powered travel recommendation app using Next.js and PostgreSQL</li>
            <li>Built scalable eCommerce solutions for global brands</li>
            <li>Optimized microservices for high-traffic fintech platforms</li>
          </ul>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2">Feel free to reach out at <a href="mailto:acharyakavita12@gmail.com" className="text-blue-500">acharyakavita12@gmail.com</a></p>
        </section>
      </main>
    </div>
  );
}

