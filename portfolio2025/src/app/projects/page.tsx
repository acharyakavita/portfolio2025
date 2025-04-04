import projectsData from '../../assets/projectsData.json';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-20 ">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projectsData.projects.map((project, index) => (
          <div key={index} className='px-2'>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">{project.technologies.join(' | ')}</p>
              <div className="mt-4 flex space-x-4">
                {project.demo ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Demo
                </a> : null}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
