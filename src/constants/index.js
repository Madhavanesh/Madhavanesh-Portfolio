import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    clar_technologies_logo,
    kct_logo,
    ai_blog,
    anilask_logo,
    banking,
    lask_mobile
} from "../assets/icons";

export const skills = [
    // {
    //     imageUrl: css,
    //     name: "CSS",
    //     type: "Frontend",
    // },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Research Co-ordinator",
        company_name: "Department Association of ISE",
        icon: kct_logo,
        iconBg: "#accbe1",
        date: "Jan 2023 - Feb 2024",
        points: [
            "Oversee research projects from inception to completion, ensuring timely execution and adherence to budgets.",
            "Foster research collaborations among faculty and students, providing guidance and support for student researchers.",
            "Identify funding opportunities, prepare grant proposals, and manage awarded grants effectively.",
            "Ensure all research activities align with ethical guidelines and regulatory standards.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Clar Technologies",
        icon: clar_technologies_logo,
        iconBg: "#fbc3bc",
        date: "Jul 2023 - Jun 2024",
        points: [
            "Software Developer Engineer with a year of experience in blockchain-based supply chain traceability.",
            "Proficient in full-stack development using React, TypeScript, and Payload CMS.",
            "Expertise in decentralized key management and data privacy.",
            "Skilled in programming languages: C, Java, Python, JavaScript, TypeScript, Go, and Solidity.",
            "Passionate about leveraging blockchain for innovative supply chain solutions.",
        ],
    },
    {
        title: "Software Development Engineer",
        company_name: "Clar Technologies",
        icon: clar_technologies_logo,
        iconBg: "#fbc3bc",
        date: "Jul 2024 - Present",
        points: [
            "Skilled Software Developer Engineer with a year of experience in building blockchain-based supply chain traceability solutions. Proficient in full-stack development using React, TypeScript, and Payload CMS. Strong foundation in decentralized key management and data privacy. Possessing a versatile skill set encompassing C, Java, Python, JavaScript, TypeScript, Go, and Solidity.",
            "Passionate about harnessing blockchain technology to drive innovation in supply chain operations. Committed to creating user-centric applications that improve efficiency and transparency. Seeking opportunities to contribute to cutting-edge projects that shape the future of the industry."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Madhavanesh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/madhavanesh-kannan-8b7192203',
    }
];

export const projects = [
    {
        iconUrl: ai_blog,
        theme: 'btn-back-red',
        name: 'AI Blog Generator',
        description: 'Developed a Python-based application utilizing the Django framework to efficiently convert engaging YouTube videos into informative blog posts.',
        link: 'https://github.com/Madhavanesh/AI-Blog-Generator',
    },
    {
        iconUrl: anilask_logo,
        theme: 'btn-back-green',
        name: 'AniLask anime website',
        description: 'Created a fundamental anime streaming website using Django for backend operations and HTML for frontend development, providing a basic platform for users to enjoy their favorite anime shows.',
        link: 'https://github.com/Madhavanesh/Anime-Website',
    },
    {
        iconUrl: banking,
        theme: 'btn-back-blue',
        name: 'Lask Banking website',
        description: 'A modern, secure banking platform built with React, TypeScript, and Plaid integration, enhanced with Sentry for robust error tracking.A user-friendly banking website powered by React and TypeScript, leveraging Plaid for seamless financial data integration and Sentry for reliable error monitoring.',
        link: 'https://github.com/Madhavanesh/Lask-Banking',
    },
    {
        iconUrl: lask_mobile,
        theme: 'btn-back-yellow',
        name: 'Lask Mobile App',
        description: 'A versatile mobile app built with React Native and Expo, featuring a home page, profile page, liked videos page, and a video creation tool. A user-friendly video app powered by React Native and Expo, offering personalized features like home, profile, liked videos, and video creation.',
        link: 'https://github.com/Madhavanesh/Lask-Mobile',
    }
];