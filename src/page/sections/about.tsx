const About = () => {
  return (
    <section id="about" className="scroll-mt-24 w-full text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-15">
        <div className="flex flex-col items-center text-center lg:gap-8 gap-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            About Me
          </h2>

          <span className="w-16 h-1 bg-sky-400 rounded-full" />

          <p className="text-[14px] sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl">
            Full Stack Developer with completed training in{" "}
            <span className="text-white font-bold">
              React Frontend Development
            </span>
            and{" "}
            <span className="text-white font-bold">Backend Development</span>.
            Strong hands-on experience in building responsive, user-friendly web
            applications and converting Figma designs into production-ready
            interfaces.
          </p>

          <p className="text-[14px] sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl">
            Familiar with backend fundamentals including{" "}
            <span className="text-white font-bold">
              Node.js, Express.js, MongoDB, REST APIs, JWT Authentication
            </span>
            , and{" "}
            <span className="text-white font-bold">Stripe integration</span>.
            Actively seeking{" "}
            <span className="text-sky-400 font-medium">
              entry-level Full Stack opportunities
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
