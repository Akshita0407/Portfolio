// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#020618] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Akshita Sharma. All rights reserved.
        </p>

        {/* <nav className="flex gap-6">
          <Link to="#home" className="hover:text-sky-400 transition">
            Home
          </Link>
          <Link to="#projects" className="hover:text-sky-400 transition">
            Projects
          </Link>
          <Link to="#contact" className="hover:text-sky-400 transition">
            Contact
          </Link>
        </nav> */}

        <p className="text-gray-500">Built with React & Tailwind</p>
      </div>
    </div>
  );
};

export default Footer;
