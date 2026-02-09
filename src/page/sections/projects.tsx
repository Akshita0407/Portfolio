import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
}
const projects: Project[] = [
  {
    id: 1,
    title: "Agency Website Pages Development",
    description:
      "Developed and integrated various pages for an agency website during training, combining frontend components with backend APIs. Ensured reusable components, responsive layouts, and a polished user experience throughout the site.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Interactive E-Commerce Platform",
    description:
      "Built a fully responsive e-commerce website, collaborating with senior developers and independently developing 6–8 pages using React. Implemented reusable components and a clean layout to ensure scalability, maintainability, and an intuitive shopping experience across devices.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Figma-to-Web Practice Projects",
    description:
      "Converted multiple Figma design mockups into fully responsive, practice websites using React and Tailwind CSS. Focused on pixel-perfect layouts, component reusability, and responsive design to strengthen frontend development skills.",
    tech: ["React", "Tailwind CSS", "Figma", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Projects
          </h2>
          <span className="w-14 h-1 bg-sky-400 rounded-full" />
        </div>
        <p className="text-gray-300 max-w-2xl text-[12px] lg:text-[16px] mb-12">
          Here are some of the projects I've worked on, showcasing my skills in
          building responsive and interactive web applications.
        </p>

        <div className="space-y-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#020618] border border-white/20 rounded-2xl p-8 hover:border-sky-400 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute top-6 right-8 text-6xl font-bold text-white/5 group-hover:text-sky-400/20 transition-colors">
                0{project.id}
              </span>

              <div className="relative z-10">
                <h3 className="md:text-xl text-[14px] font-bold mb-3 text-gray-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400  max-w-2xl text-[12px] lg:text-[16px] mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 text-sm rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/Akshita0407"
            target="_blank"
            className="flex items-center gap-2 px-8 py-3 bg-sky-400/10 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all font-medium text-sm"
          >
            <FaGithub fontSize={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
