import type { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

interface Links {
  id: number;
  to?: string;
  icon: ReactNode;
}
const content: Links[] = [
  { id: 1, to: "https://github.com/Akshita0407", icon: <FaGithub /> },
  {
    id: 2,
    to: "https://www.linkedin.com/in/akshitaSharma07",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    to: "https://www.instagram.com/_akshii_",
    icon: <FaInstagram />,
  },
];
const Footer = () => {
  return (
    <div className="w-full bg-[#020618] border-t border-white/10">
      <div className="w-full px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Akshita Sharma. All rights reserved.
        </p>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className=" flex  gap-3">
            {content.map((c) => (
              <div
                className="flex gap-3 text-3xl hover:text-sky-400"
                key={c.id}
              >
                <a href={c.to} target="_blank">
                  {c.icon}
                </a>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center text-2xl">
            <FaEnvelope /> <p className="text-[16px]">akshitaa0304@gmail.com</p>
          </div>
        </div>
        <p className="text-gray-500">Built with React & Tailwind</p>
      </div>
    </div>
  );
};

export default Footer;
