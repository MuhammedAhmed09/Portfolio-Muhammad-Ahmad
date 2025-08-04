import projects from '../projects.json';

const Projects = () => {
  return (
    <section className="p-12 min-h-screen lg:ml-52">
      <h2 className="text-3xl font-bold text-[#80ed99] mb-10 text-center">My Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-[#212529] rounded-2xl shadow-md hover:shadow-[#80ed9980] transition duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-[#80ed99] text-lg font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                <h4 className="text-sm font-medium text-gray-400">
                  <span className="text-[#80ed99]">Tech:</span> {project.technologies}
                </h4>
              </div>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-[#80ed99] text-black font-semibold rounded hover:bg-[#70d389] transition"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 border border-[#80ed99] text-[#80ed99] font-semibold rounded hover:bg-[#80ed99] hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
