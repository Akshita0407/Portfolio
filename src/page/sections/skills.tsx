interface Content {
  id: number;
  title: string;
  skills: string[];
}

const data: Content[] = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Stripe",
    ],
  },
  {
    id: 3,
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Vs Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className=" w-full bg-[#020618] text-gray-100">
      <div className="w-full px-6 md:px-10 lg:px-16 py-15">
        <div className="flex flex-col gap-4 mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Skills
          </h2>
          <span className="w-14 h-1 bg-sky-400 rounded-full" />
        </div>
        <p className="text-gray-300 text-[14px] lg:text-2xl max-w-2xl mb-8">
          These are the technologies I work with and continuously improve upon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 border min-h-50 border-white/20 rounded-2xl p-6 hover:border-sky-400 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-sky-400 hover:text-sky-400 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
