
import {

  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  mog,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arm_innov,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "GRC",
    icon: mobile,
  },
  {
    title: "Risk Analyst",
    icon: web,
  },
  {
    title: "Security Governance",
    icon: backend,
  },
  {
    title: "SOC Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "Cybersecurity Intern",
    company_name: "ARM Innovations Pvt Ltd",
    icon: arm_innov,
    iconBg: "#E6DEDD",
    date: "Sept 2026 - Present",
    points: [
      "Conducted IT and cyber risk assessments across enterprise systems, identifying vulnerabilities and aligning mitigation strategies with organizational risk tolerance.",
      "Assisted in evaluating security controls against industry compliance frameworks and standards, including ISO 27001, NIST CSF, and SOC 2.",
      "Collaborated with engineering teams to perform threat modeling and security posture reviews across software architectures and CI/CD pipelines.",
      "Maintained and updated organizational Risk Registers, tracking vulnerability remediation lifecycles and Key Risk Indicators (KRIs).",
      "Supported compliance gap analyses, internal audits, and third-party risk management (TPRM) reviews to ensure continuous governance.",

    ],
  },
  {
    title: "Software Engineer",
    company_name: "Moglix",
    icon: mog,
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Aug 2026",
    points: [
      "Collaborated with cross-functional teams to analyze business processes, identify operational risks, and improve system reliability for enterprise financial platforms.",
      "Supported secure implementation of AI-enabled solutions while maintaining data integrity and operational efficiency.",
      "Participated in requirement analysis, issue resolution, and process improvement initiatives within a regulated fintech environment.",
      "Developed data-rich dashboards using Angular, implementing dynamic charts, real-time updates, and modular components, which improved data visibility and decision-making efficiency by 35% for internal stakeholders.",
      "Collaborated closely with the AI/ML team to integrate AI chatbots and AI-powered content analyzers into the frontend, enabling real-time insights and intelligent user interactions, leading to a 25% reduction in support queries and a 30% increase in feature adoption"

    ],
  },
  {
    title: "Software Engineer",
    company_name: "Venuelook",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jume 2024 - Nov 2025",
    points: [
      "Engineered scalable web scraping tools in Python to collect and enhance venue-related data from diverse web sources across India and Singapore.",
      "Developed NLP pipelines for semantic search, entity extraction, and query understanding, significantly improving internal tools and user experience.",
      "Utilized OpenAI APIs and LangChain to automate data categorization, perform text enhancement and generate intelligent suggestions for listings",
      "Single-handedly resolved a complex server-side rendering issue in Next.js, leading to a 35% reduction in page load times and a 25% increase in user retention on high-traffic pages.",
      "Integrating and optimizing APIs in a Next.js environment, resulting in a 35% reduction in server response times and a 30% improvement in data retrieval efficiency, enhancing overall application performance",
      "Developing and managing complex MySQL database queries, streamlining data operations and cutting query execution times by 30%, leading to a 20% improvement in application response time and overall system reliability",

    ],
  },
  {
    title: "Graduation",
    company_name: "Deenbandhu Chhotu Ram University of Science and Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - June 2024",
    points: [
      "Bachelors of technology specialised in Computer Science",
      "Scored 91 percentile in JEE mains",
    ],
  },


];

const projects = [
  {
    name: "PropBotix",
    description:
      "Developed an AI-driven real estate platform using Next.js, Python, MySQL, and LangChain with LLM for dynamic user interaction. Engineered an intelligent agent pipeline for personalized property recommendations, leveraging vector embeddings, RAG (Retrieval-Augmented Generation), and real-time natural language querying.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "GenAI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
  {
    name: "Blog App",
    description:
      "Web-based platform that allows users to post, read, edit and delete blogs, providing a convenient and efficient solution for showcasing your writing skills",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appWrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/20001001054/Blog-App",
  },
  {
    name: "Mapty App",
    description:
      "A web-based platform designed to capture users' current geographical coordinates, facilitating the tracking and documentation of their workout sessions in real-time.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/20001001054/Mapty-app",
  },

];

export { services, technologies, experiences, projects };