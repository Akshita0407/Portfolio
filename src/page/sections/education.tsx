import { GiGraduateCap } from "react-icons/gi";
const Education = () => {
  const educationData = [
    {
      degree: "Bachelors of Computer Application",
      institution: "P.S.R Govt. Degree College, Baijnath",
      grade: "CGPA: 8.10",
      year: 2024,
    },
    {
      degree: "12th (HPBOSE)",
      institution: "Binwa Public Sr. Sec School, Baijnath",
      grade: "94.4%",
      year: 2021,
    },
    {
      degree: "10th (HPBOSE)",
      institution: "Binwa Public Sr. Sec School, Baijnath",
      grade: "89.4%",
      year: 2019,
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 lg:px-16 py-15 text-[#020618]">
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Education
        </h2>
        <span className="w-14 h-1 bg-sky-400 rounded-full" />
      </div>

      <div className="flex flex-col gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <GiGraduateCap fontSize={25} className="text-gray-700 mt-1" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-[14px] sm:text-2xl font-semibold">
                {edu.degree}
              </h3>
              <p className="text-gray-700 text-[12px] md:text-[14px]">
                {edu.institution}
              </p>
              <p className="text-gray-900 text-[12px] md:text-[14px]">
                {edu.grade} | {edu.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
