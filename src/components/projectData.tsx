import agencyBanner from "../assets/agencyServiceBanner.png";
import alibabaBanner from "../assets/alibabaBanner.png";
import responsiveBanner from "../assets/responsiveBanner.png";
import resumateBanner from "../assets/resumateBanner.png";
import agencyOne from "../assets/agencyOne.png";
import agencyTwo from "../assets/agencyTwo.png";
import agencyThree from "../assets/agencyThree.png";
import agencyFour from "../assets/agencyFour.png";
import agencyFive from "../assets/agencyFive.png";
import alibabaone from "../assets/alibabaOne.png";
import aliTwo from "../assets/alibabaTwo.png";
import aliThree from "../assets/alibabaThree.png";
import aliFour from "../assets/alibabaFour.png";
import aliFive from "../assets/alibabaFive.png";
import aliSix from "../assets/alibabaSix.png";
import aliSeven from "../assets/alibabaSeven.png";
import aliEight from "../assets/alibabaEight.png";
import aliNine from "../assets/alibabaNine.png";
import aliTen from "../assets/alibabaTen.png";
import aliEleven from "../assets/alibabaEleven.png";
import aliTwelve from "../assets/alibabaTwelve.png";
import aliThirteen from "../assets/alibabaThirteen.png";
import aliFourteen from "../assets/alibababaFourteen.png";
import resumateOne from "../assets/resumateOne.png";
import resumateTwo from "../assets/resumateTwo.png";
import resumateThree from "../assets/resumateThree.png";
import resumateFour from "../assets/resumateFour.png";
import resumateFive from "../assets/resumateFive.png";
import resumateSix from "../assets/resumateSix.png";
import responsiveOne from "../assets/responsiveOne.png";
import responsiveTwo from "../assets/responsiveTwo.png";
import responsiveThree from "../assets/responsiveThree.png";
import responsiveFour from "../assets/responsiveFour.png";
import responsiveFive from "../assets/responsiveFive.png";
import responsiveSix from "../assets/responsiveSix.png";
import responsiveSeven from "../assets/responsiveSeven.png";
import responsiveEight from "../assets/responsiveEight.png";
import responsiveNine from "../assets/responsiveNine.png";
import responsiveTen from "../assets/responsiveTen.png";
import responsiveEleven from "../assets/responsiveEleven.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Agency Website Pages Development",
    description:
      "Developed and integrated various pages for an agency website during training, combining frontend components with backend APIs. Ensured reusable components, responsive layouts, and a polished user experience throughout the site.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
    images: [
      agencyBanner,
      agencyOne,
      agencyTwo,
      agencyThree,
      agencyFour,
      agencyFive,
    ],
  },
  {
    id: 2,
    title: "Interactive E-Commerce Platform",
    description:
      "Built a fully responsive e-commerce website, collaborating with senior developers and independently developing 6–8 pages using React. Implemented reusable components and a clean layout to ensure scalability, maintainability, and an intuitive shopping experience across devices.",
    tech: ["React", "Reusable Components", "Responsive Design", "Tailwind CSS"],
    images: [
      alibabaBanner,
      alibabaone,
      aliTwo,
      aliThree,
      aliFour,
      aliFive,
      aliSix,
      aliSeven,
      aliEight,
      aliNine,
      aliTen,
      aliEleven,
      aliTwelve,
      aliThirteen,
      aliFourteen,
    ],
  },
  {
    id: 3,
    title: "ResuMate-Resume builder website",
    description:
      "Converted multiple Figma design mockups into fully responsive, practice websites using React and Tailwind CSS. Focused on pixel-perfect layouts, component reusability, and responsive design to strengthen frontend development skills.",
    tech: ["React", "Tailwind CSS", "Figma", "Responsive Design","Firebase"],
    images: [
      resumateBanner,
      resumateOne,
      resumateTwo,
      resumateThree,
      resumateFour,
      resumateFive,
      resumateSix,
    ],
  },
  {
    id: 4,
    title: "Responsive Designs",
    description:
      "Built fully responsive website layouts ensuring seamless user experience across desktop, tablet, and mobile devices while maintaining design consistency and performance optimization.",
    tech: ["React", "Tailwind CSS", "Responsive Design"],
    images: [
      responsiveBanner,
      responsiveOne,
      responsiveTwo,
      responsiveThree,
      responsiveFour,
      responsiveFive,
      responsiveSix,
      responsiveSeven,
      responsiveEight,
      responsiveNine,
      responsiveTen,
      responsiveEleven,
    ],
  },
];
