import video from "../../assets/resuMate.mp4";

const Resumate = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-6 md:px-10 lg:px-16 py-15 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold ">
              Recent Project
            </h2>
            <span className="w-24 h-1 bg-sky-400 rounded-full" />
          </div>

          <div className="w-full  grid grid-cols-1 lg:grid-cols-2 text-gray-800 gap-8 ">
            <div className="w-full flex flex-col p-2  lg:order-1 order-2 gap-5 text-[12px] md:text-[16px] ">
              <h2 className="text-2xl font-semibold text-[#020618]">
                Resumate-Resume Builder Website
              </h2>
              <p>
                Resumate is a full-stack resume builder web application designed
                to help users create, customize, and download professional
                resumes with ease. The platform provides a clean, user-friendly
                interface where users can input their personal details,
                education, experience, and skills, and instantly generate a
                well-structured resume.
              </p>
              <p>
                The application uses Firebase as the backend to handle
                authentication, real-time database storage, and secure data
                management. Users can sign up, log in, save their resume data,
                and update it anytime.
              </p>
            </div>
            <div className="w-full flex justify-center items-center lg:order-2 order-1">
              <video
                src={video}
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-hull"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumate;
