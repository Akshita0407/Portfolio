import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ImCross } from "react-icons/im";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";
import { type Project } from "../../components/projectData";
import { projects } from "../../components/projectData";
import "swiper/swiper-bundle.css";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});//Project 1 is showing image index 2
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);//used to store interval id here to use it in clear interval-->without it images keep changing even after hover
  const swiperRef = useRef<SwiperType | null>(null);//gives mannual controlling to the swiper

  const handleMouseEnter = (project: Project) => {
    setHoveredId(project.id); //tells which project id is hovered
    swiperRef.current?.autoplay.stop(); //Stops main slider from moving.

    if (intervalRef.current) clearInterval(intervalRef.current);//any prev intrval running then clear it

    intervalRef.current = setInterval(() => {
      setImageIndexes((prev) => {
        const currentIndex = prev[project.id] ?? 1;
        const nextIndex =
          currentIndex >= project.images.length - 1 ? 1 : currentIndex + 1; //If at last image → go back to 1 Else → go to next image
        return { ...prev, [project.id]: nextIndex };//copy prev state and update only one project
      });
    }, 700);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
    swiperRef.current?.autoplay.start();
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-slate-950 text-gray-100"
    >
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

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 1.5 },
          }}
        >
          {projects.map((project) => {
            const currentIndex =
              hoveredId === project.id ? (imageIndexes[project.id] ?? 1) : 0;

            return (
              <SwiperSlide key={project.id}>
                <div
                  className="relative rounded-2xl overflow-hidden group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(project)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={project.images[currentIndex]}
                    alt={project.title}
                    className="w-225 h-105 object-contain border border-transparent rounded-2xl transition duration-500"
                  />

                 
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

                
                  <div className="absolute top-3 left-2 flex opacity-0 group-hover:opacity-100 transition duration-300">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setOpen(true);
                      }}
                      className="text-black bg-white w-14 h-14 flex justify-center items-center aspect-square border rounded-full font-semibold hover:scale-105 transition hover:translate-x-3"
                    >
                      <FaExternalLinkAlt size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {open && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl p-8 border border-white/10">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg"
              >
                <ImCross />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-sky-400">
                {selectedProject.title}
              </h2>
              {/* <div className="w-full ">
{projects.images.map(()=>{
<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
</div> 
})}         
 </div> */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 text-sm rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-15">
          <a
            href="https://github.com/Akshita0407"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-sky-400/10 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all font-medium text-sm"
          >
            <FaGithub size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
