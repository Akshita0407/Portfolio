import vsCode from "../../assets/vsCode.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import tailwind from "../../assets/tailwind.png";
import mongodb from "../../assets/mongoDb.png";
import mui from "../../assets/mui.png";
import node from "../../assets/node.png";
import react from "../../assets/reactJs.png";
import stripe from "../../assets/stripe.png";
import postman from "../../assets/postman.png";
import github from "../../assets/github.png";
import express from "../../assets/express.png";

interface Skill {
  id: number;
  label: string;
  image: string;
}

const data: Skill[] = [
  { id: 1, label: "VS Code", image: vsCode },
  { id: 2, label: "HTML", image: html },
  { id: 3, label: "CSS", image: css },
  { id: 4, label: "JavaScript", image: js },
  { id: 5, label: "TypeScript", image: ts },
  { id: 6, label: "React", image: react },
  { id: 7, label: "Tailwind CSS", image: tailwind },
  { id: 8, label: "MongoDB", image: mongodb },
  { id: 9, label: "MUI", image: mui },
  { id: 10, label: "Node js", image: node },
  { id: 11, label: "Express js", image: express },
  { id: 12, label: "GitHub", image: github },
  { id: 13, label: "Stripe", image: stripe },
  { id: 14, label: "Postman", image: postman },
];

const Slider = () => {
  return (
    <section className="w-full py-15 bg-[#020618] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12  px-6 md:px-10 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-100 ">
            Technologies I Use
          </h2>
          <div className="w-14 h-1 bg-sky-400 rounded-full mt-3 block" />
        </div>
        {/* <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-infinite-scroll whitespace-nowrap">
            {[...data, ...data, ...data].map((skill) => (
              <div
                key={skill.id}
                className="group relative w-34 h-34 aspect-square rounded-full  border border-white/20 flex items-center justify-center shrink cursor-pointer"
              >
                <div className="w-25 h-25 rounded-full backdrop-blur-sm flex items-center justify-center p-6">
                  {" "}
                  <img
                    src={skill.image}
                    alt={skill.label}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"
                  />
                </div>
                <span className="absolute inset-0 rounded-full flex justify-center items-center   text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-xs text-center px-2 ">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-6 md:px-10 lg:px-16">
          {data.map((skill) => (
            <div
              key={skill.id}
              className="
        group
        bg-white/5
        border border-white/10
        backdrop-blur-md
        rounded-2xl
        p-6
        flex flex-col items-center justify-center
        hover:border-sky-400
       
        transition-all duration-300
      "
            >
              <img
                src={skill.image}
                alt={skill.label}
                className="w-14 h-14 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm text-gray-300 group-hover:text-sky-400 transition">
                {skill.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
