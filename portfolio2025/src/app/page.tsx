export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      <main className="max-w-4xl mx-auto mt-10 p-6">
        <section id="about" className="mb-10">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            I’m a <span className="font-semibold">Senior Software Engineer </span>
            with 12+ years of experience, specializing in full-stack development
            using TypeScript, Node.js, Next.js, and React.
            I excel in building scalable backend applications using Express,
            SQL/NoSQL databases, Redis, and GraphQL. My expertise spans UI development,
            REST API design, databases , microservices, and cloud services.
            I have successfully delivered solutions across FinTech, eCommerce, Social Media Marketing,
            Insurance, and Real Estate industries.
          </p>
        </section>

        <section id="contact" className="mb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2">Feel free to reach out at
            <a href="mailto:acharyakavita12@gmail.com" className="text-blue-500"> Email </a>
            /
            <a href="https://www.linkedin.com/in/kavitha-acharya-60975637" className="text-blue-500 text-"> Linkedin </a>
          </p>
        </section>
      </main>
    </div>
  );
}

