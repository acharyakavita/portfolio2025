
import React from "react";
import resumeData from '../../assets/data.json';
const ResumePage = () => {
  return (
    <div className="container mx-auto py-2 text-center">
      {/* Download Button with Icon */}
      <a href="/resume.pdf" download="Kavitha_Acharya_Resume.pdf">
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 flex items-center justify-center space-x-2">
          <span className="inline-flex items-center space-x-2">
            {/* Insert your download icon */}
            <span className="w-5 h-5">📥</span>
            <span>Download</span>
          </span>
        </button>
      </a>


      <div className="container mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold">{resumeData.name}</h1>
        <p className="text-lg mt-4">{resumeData.title}</p>
        <p className="mt-2 text-gray-600">{resumeData.location}</p>

        <div className="mt-4 flex justify-center space-x-4">
          <a href={`mailto:${resumeData.contact.email}`} className="text-blue-600 hover:underline">
            {resumeData.contact.email}
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href={resumeData.contact.github} target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </div>

        {/* Career Summary */}
        <section className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Career Summary</h2>
          <ul className="list-disc pl-5">
            <li className="mt-2">{resumeData.career_summary.experience}</li>
            <li className="mt-2">{resumeData.career_summary.expertise}</li>
            <li className="mt-2">Strong background in creating {resumeData.career_summary.skills.join(', ')}</li>
            <li className="mt-2">Proven track record of delivering solutions across {resumeData.career_summary.industries.join(', ')} industries</li>
          </ul>

        </section>

        {/* Technical Skills Section */}
        <section className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Languages/Frameworks:</h3>
            </div>
            <div className="inline-block ml-5">
              <p>{resumeData.technical_skills.languages_frameworks.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Styling Frameworks:</h3>
            </div>
            <div className="inline-block  ml-5">
              <p>{resumeData.technical_skills.styling_frameworks.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Databases/Querying:</h3>
            </div>
            <div className="inline-block  ml-5">
              <p>{resumeData.technical_skills.databases_querying.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Cloud & DevOps:</h3>
            </div>
            <div className="inline-block  ml-5">
              <p>{resumeData.technical_skills.cloud_devops.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Tools:</h3>
            </div>
            <div className="inline-block ml-5">
              <p>{resumeData.technical_skills.tools.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Test Frameworks:</h3>
            </div>
            <div className="inline-block  ml-5">
              <p>{resumeData.technical_skills.test_frameworks.join(', ')}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="inline-block">
              <h3 className="font-semibold">Graph Libraries:</h3>
            </div>
            <div className="inline-block ml-5">
              <p>{resumeData.technical_skills.graph_libraries.join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Professional Experience</h2>
          {resumeData.professional_experience.map((experience, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold">{experience.company} - {experience.role}</h3>
              <p>{experience.duration} - {experience.location}</p>
              {experience.clients ? (
                experience.clients.map((client, clientIndex) => (
                  <div key={clientIndex}>
                    {typeof client === 'object' && client.name && (
                      <h4 className="italic font-semibold ">Client : {client.name}</h4>
                    )}
                    <ul className="list-disc pl-5">
                      {typeof client === 'object' && client.responsibilities.map((responsibility: string, resIndex: number) => (
                        <li key={resIndex}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <ul className="list-disc pl-5">
                  {experience.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex}>{responsibility}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-2">{resumeData.education.degree} (CGPA: {resumeData.education.cgpa})</p>
          <p>{resumeData.education.duration} - {resumeData.education.institution}</p>
        </section>


      </div>
    </div >
  );
};
export default ResumePage;
