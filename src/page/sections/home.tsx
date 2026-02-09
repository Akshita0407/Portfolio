import { useState } from "react";
import image from "../../assets/akshita.jpg";
import { ImCross } from "react-icons/im";
const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="w-full  min-h-[85vh] rounded-b-2xl  py-15 px-6 md:px-10 lg:px-16  flex items-center bg-[#020618] text-gray-100"
      >
        <div className=" w-full flex lg:flex-row flex-col-reverse gap-10">
          <div className="lg:w-[50%] w-full flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-sky-400 text-sm font-medium mb-3 tracking-wide">
              Hello, I’m
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              Akshita Sharma
            </h1>

            <h2 className="text-[14px] sm:text-xl text-gray-400 lg:mb-6 mb-3 max-w-2xl">
              Full Stack Developer specializing in building responsive,
              user-friendly web applications using React, Node.js, and MongoDB.
            </h2>

            <p className="text-gray-500 text-sm mb-8">Mohali, Punjab, India</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 rounded-xl bg-sky-400 text-slate-900 font-medium transition hover:bg-sky-300"
              >
                View Resume
              </button>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/15 text-gray-200 transition hover:border-sky-400 hover:text-sky-400"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="lg:w-[48%] w-full flex justify-center items-center">
            <div className="lg:w-80 lg:h-80 w-70 h-70 rounded-full aspect-square border border-white shadow-2xs">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover objec-center rounded-full border aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 rounded-xl overflow-hidden border border-white/10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              <ImCross />
            </button>

            <iframe
              src="/FullStackResume.pdf"
              className="w-full h-full"
              title="Akshita Sharma Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
