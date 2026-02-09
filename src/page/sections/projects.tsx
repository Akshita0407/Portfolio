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
    title: "Trade E-Commerce Platform",
    description:
      "Clone of a big e-commerce website; worked with senior developers and independently developed 6–8 responsive pages using React and reusable components.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Figma to Responsive Web Projects",
    description:
      "Converted Figma designs into responsive, pixel-perfect websites for ConnectYou, Flow, and BabySteps using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Figma", "Responsive Design"],
  },
  {
    id: 3,
    title: "Official Company Website Service Pages",
    description:
      "Built and integrated service pages during training with backend integration.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
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
        <p className="text-gray-300 max-w-2xl text-[14px] lg:text-[20px] mb-12">
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
                <h3 className="md:text-2xl text-xl font-bold mb-3 text-gray-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[14px] lg:text-[20px] mb-6 leading-relaxed">
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
