import { FaLaptopCode } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
export const SkillsDescription = [
  {
    title: "Frontend Development",
    description:
      " Can design responsive frontend apps using React, Next.js, and Remix. I build user-friendly interfaces with a focus on performance and accessibility, ensuring fast and inclusive experiences across all devices.",
    icon: <FaLaptopCode size={35} />,
  },
  {
    title: "Backend Development",
    description:
      "I can create robust backend systems using NestJS, Laravel,Spring Boot and FastAPI.Design APIs that are secure, scalable, and efficient, enabling seamless data handling and real-time features.",
    icon: <BsServer size={35} />,
  },
  {
    title: "Mobile Application",
    description:
      "I can develop cross-platform mobile applications using React Native and Flutter. I focus on delivering smooth, responsive apps that work well on both iOS and Android devices, ensuring a consistent user experience.",
    icon: <FaMobileAlt size={35} />,
  },
  {
    title: "GitHub",
    description:
      "Proficient in using GitHub for version control, collaboration, and open-source contribution. I manage repositories, track issues, and follow best practices for commit history and branching.",
    icon: <FaGitAlt size={35} />,
  },
  {
    title: "Debugging & Problem Solving",
    description:
      "Strong problem-solving mindset. Skilled in debugging and optimizing code using tools like Chrome DevTools, Redux DevTools, and error monitoring platforms.",
    icon: <FaBug size={35} />,
  },
  {
    title: "Performance",
    description:
      "Focused on building fast, optimized apps by lazy loading components, minimizing bundle size, and using tools like Lighthouse and Web Vitals to monitor performance.",
    icon: <IoRocket size={35} />,
  },
];
