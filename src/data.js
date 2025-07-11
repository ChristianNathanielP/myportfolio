// Project
import Nutrimentum from "../public/assets/proyek/Nutrimentum.png"
import WisebitesMbl from "../public/assets/proyek/WiseBites_Mobile.png"
import Wisebites from "../public/assets/proyek/WiseBites.png"
import Piaijeii from "../public/assets/proyek/Piaijeii.png"
import Notes from "../public/assets/proyek/Notes.png"
import Cinaflix from "../public/assets/proyek/cinaflix.jpg"

export const projects = [
  {
    id: 1,
    title: "Nutrimentum",
    img: Nutrimentum,
    stack: ["Python", "ScikitLearn", "TensorFlow", "Keras"],
    category: "Machine Learning",
    year: "2025",
    link: "https://github.com/ChristianNathanielP/nutrimentum-streamlit"
  },
  {
    id: 2,
    title: "WiseBites Mobile",
    img: WisebitesMbl,
    stack: ["Kotlin", "Firebase", "Gradle"],
    category: "UI/UX, Mobile Developer",
    year: "2024",
    link: "https://github.com/ChristianNathanielP"
  },
  {
    id: 3,
    title: "WiseBites",
    img: Wisebites,
    stack: ["Laravel", "Tailwind", "JavaScript", "PostgreSQL"],
    category: "Fullstack Developer",
    year: "2024",
    link: "https://github.com/ChristianNathanielP"
  },
  {
    id: 4,
    title: "Piaijeii 2.0",
    img: Piaijeii,
    stack: ["Laravel", "Tailwind", "JavaScript", "SQLite"],
    category: "Fullstack Developer",
    year: "2024",
    link: "https://github.com/ChristianNathanielP/Piaijeii_2.0"
  },
  {
    id: 5,
    title: "Notes_Laravel",
    img: Notes,
    stack: ["Laravel", "Tailwind", "Vite", "SQLite"],
    category: "Fullstack Developer",
    year: "2024",
    link: "https://github.com/ChristianNathanielP/Notes_Laravel"
  },
  {
    id: 6,
    title: "CinaFlix 2.0",
    img: Cinaflix,
    stack: ["PHP", "CSS", "JavaScript", "MySQL"],
    category: "FrontEnd & ML",
    year: "2024",
    link: "https://github.com/ChristianNathanielP/Cina_Flix_2.0"
  },
];




import USU from "../public/assets/experience/USU.png"
import IKLC from "../public/assets/experience/IKLC.png"
import RumahDev from "../public/assets/experience/RumahDev.jpeg"
import DBS from "../public/assets/experience/dbs.jpeg"
import Telkomsel from "../public/assets/experience/Telkomsel.png"

// Experience
export const experiences = [
  {
    year: "2022 - 2026 (expected)",
    icon: USU,
    role: "Computer Science Student",
    company: "Universitas Sumatera Utara",
    description: "A 6th-semester Computer Science student at Universitas Sumatera Utara, with strong academic performance and a passion for technology and software development.",
    tags: ["CSStudent", "ProblemSolving", "Programming", "SoftwareDevelopment", "AI"]
  },
  {
    year: "2025",
    role: "Machine Learning Cohort",
    icon: DBS,
    company: "Coding Camp by DBS Foundation",
    description: "Selected as one of the participants in an intensive training program focused on machine learning. Gained practical knowledge through hands-on projects, mentorship, and collaborative learning. The program emphasized solving real-world problems using data-driven approaches.",
    tags: ["Coding Camp", "Machine Learning", "DBS Foundation", "Dicoding"]
  },
  {
    year: "2024 - Present",
    role: "Laboratorium Asistant",
    icon: IKLC,
    company: "IKLC USU",
    description: "Assisted over 100 students across multiple lab courses by supporting their learning in programming and web development. Helped create an engaging and effective learning environment through clear communication and guidance.",
    tags: ["LabAssistant", "IKLC", "TeachingAssistant", "Student Mentor", "Programming Lab"]
  },
  {
    year: "2024 - 2025",
    role: "Web Development Mentor - SMK Bina Media Extracurricular Program",
    icon: RumahDev,
    company: "RumahDev-Tech",
    description: "Guided vocational high school students at SMK Bina Media through an extracurricular program focused on web development. Helped them create simple website projects in teams, while building their confidence, collaboration, and real-world problem-solving skills.",
    tags: ["Extracurricular Program", "StudentMentor", "Project Based Learning"]
  },
  {
    year: "2024",
    role: "Intern",
    icon: Telkomsel,
    company: "Telkomsel Medan",
    description: "Supported backend development in a professional environment, learning how large-scale web systems work. Helped improve internal tools to make data work more efficiently and worked with the data team to support clearer and more useful data visuals.",
    tags: ["Internship Experience", "Laravel", "PowerBI"]
  },
];

import HTML from "../public/assets/tools/html5.svg"
import CSS from "../public/assets/tools/css.svg"
import JS from "../public/assets/tools/javascript.svg"
import ReactJS from "../public/assets/tools/react.svg"
import Tailwind from "../public/assets/tools/tailwindcss.svg"
import PHP from "../public/assets/tools/php.svg"
import Laravel from "../public/assets/tools/laravel.svg"
import Node from "../public/assets/tools/nodedotjs.svg"
import SQLite from "../public/assets/tools/sqlite.svg"
import MySQL from "../public/assets/tools/mysql.svg"
import PostgreSQL from "../public/assets/tools/postgresql.svg"
import Git from "../public/assets/tools/git.svg"
import Github from "../public/assets/tools/php.svg"
import Vercel from "../public/assets/tools/vercel.svg"
import Kotlin from "../public/assets/tools/kotlin.svg"
import Python from "../public/assets/tools/python.svg"
import TensorFlow from "../public/assets/tools/tensorflow.svg"
import Keras from "../public/assets/tools/keras.svg"
import Streamlit from "../public/assets/tools/streamlit.svg"
import Figma from "../public/assets/tools/figma.svg"
import Canva from "../public/assets/tools/canva.svg"


// Tech Stack
export const technologies = [
  { name: "HTML5", icon: HTML, color: "#E34F26", doc: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: CSS, color: "#663399", doc: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: JS, color: "#F7DF1E", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "ReactJS", icon: ReactJS, color: "#61DAFB", doc: "https://reactjs.org/docs/getting-started.html" },
  { name: "Tailwind", icon: Tailwind, color: "#06B6D4", doc: "https://tailwindcss.com/docs" },

  { name: "PHP", icon: PHP, color: "#777BB4", doc: "https://www.php.net/docs.php" },
  { name: "Laravel", icon: Laravel, color: "#FF2D20", doc: "https://laravel.com/docs" },
  { name: "Node.js", icon: Node, color: "#5FA04E", doc: "https://nodejs.org/en/docs" },

  { name: "SQLite", icon: SQLite, color: "#003B57", doc: "https://www.sqlite.org/docs.html" },
  { name: "MySQL", icon: MySQL, color: "#4479A1", doc: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", icon: PostgreSQL, color: "#4169E1", doc: "https://www.postgresql.org/docs/" },

  { name: "Git", icon: Git, color: "#F05032", doc: "https://git-scm.com/doc" },
  { name: "GitHub", icon: Github, color: "#181717", doc: "https://docs.github.com/" },
  { name: "Vercel", icon: Vercel, color: "#000000", doc: "https://vercel.com/docs" },

  { name: "Kotlin", icon: Kotlin, color: "#7F52FF", doc: "https://kotlinlang.org/docs/home.html" },

  { name: "Python", icon: Python, color: "#3776AB", doc: "https://docs.python.org/3/" },
  { name: "TensorFlow", icon: TensorFlow, color: "#FF6F00", doc: "https://www.tensorflow.org/learn" },
  { name: "Keras", icon: Keras, color: "#D00000", doc: "https://keras.io/getting_started/" },
  { name: "Streamlit", icon: Streamlit, color: "#FF4B4B", doc: "https://docs.streamlit.io/" },

  { name: "Figma", icon: Figma, color: "#F24E1E", doc: "https://help.figma.com/hc/en-us" },
  { name: "Canva", icon: Canva, color: "#00C4CC", doc: "https://www.canva.com/help/" },
];

