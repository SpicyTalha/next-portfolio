import { SiInstagram, SiX, SiLinkedin, SiGithub } from 'react-icons/si';

const navLinks = [
    {
        name: 'Projects',
        link: '#projects',
    },
    {
        name: 'Experience',
        link: '#experience',
    },
    {
        name: 'Skills',
        link: '#skills',
    },
    {
        name: 'Tech',
        link: '#techlogos',
    },
];

const projects = [
    {
        title: 'Battleship',
        description:
            'A fun take on the classic game, featuring an AI opponent and a custom bot system, built with Python and Tkinter.',
        github: 'https://github.com/SpicyTalha/BattleShip',
        image: '/images/battleship.png',
    },
    {
        title: 'EmoScan',
        description:
            'A Python-powered sentiment analysis tool that detects emotional tone from text input using natural language processing.',
        github: 'https://github.com/SpicyTalha/EmoScan',
        image: '/images/emoscan.png',
    },
    {
        title: 'PakZone',
        description:
            'A B2C e-commerce platform where users in Pakistan can browse and purchase digital products with ease.',
        github: 'https://github.com/SpicyTalha/PakZone-frontend',
        image: '/images/pakzone.png',
    },
    {
        title: 'SpeakSigns',
        description:
            'An Android app that translates sign language into text using real-time camera input and machine learning with MediaPipe.',
        github: 'https://github.com/SpicyTalha/SpeakSigns',
        image: '/images/silentspeech2.png',
    },
    {
        title: 'HealthSphere',
        description:
            'A comprehensive Hospital Management System web application developed with React, Express, Node, and PostgreSQL',
        github: 'https://github.com/SpicyTalha/HealthSphere',
        image: '/images/ehealthhub.png',
    },
    {
        title: 'Etch-a-Sketch',
        description:
            'A canvas built with JavaScript that allows users to draw and create pixel art, featuring a color picker and grid size adjustment.',
        github: 'https://github.com/SpicyTalha/etch-a-sketch',
        image: '/images/etchasketch.png',
    },
];

const words = [
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
    { value: 1, suffix: '+', label: 'Years of Experience' },
    { value: 0, suffix: '+', label: 'Satisfied Clients' },
    { value: 15, suffix: '+', label: 'Completed Projects' },
    { value: NaN, suffix: '%', label: 'Client Retention Rate' },
];

const logoIconsList = [];

const abilities = [
    {
        imgPath: '/images/seo.png',
        title: 'Quality Focus',
        desc: 'Delivering high-quality results while maintaining attention to every detail.',
    },
    {
        imgPath: '/images/chat.png',
        title: 'Reliable Communication',
        desc: 'Keeping you updated at every step to ensure transparency and clarity.',
    },
    {
        imgPath: '/images/time.png',
        title: 'On-Time Delivery',
        desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
    },
];

const techStackImgs = [
    {
        name: 'React Developer',
        imgPath: '/images/logos/react.png',
    },
    {
        name: 'Backend Developer',
        imgPath: '/images/logos/node.png',
    },
    {
        name: 'Interactive Developer',
        imgPath: '/images/logos/three.png',
    },
    {
        name: 'Project Manager',
        imgPath: '/images/logos/git.svg',
    },
];

const techStackIcons = [
    { name: 'Frontend Developer', class: 'devicon-tailwindcss-plain colored' },
    { name: 'Backend Developer', class: 'devicon-nodejs-plain colored' },
    { name: 'Project Manager', class: 'devicon-git-plain colored' },
    { name: 'Unit Testing', class: 'devicon-postman-plain colored' },
    {
        name: 'Automation',
        class: 'devicon-amazonwebservices-plain-wordmark colored',
    },
];

const expCards = [
    {
        review: 'Talha brought creativity and technical expertise to the team, significantly improving our backend performance. His work has been invaluable in delivering faster experiences.',
        imgPath: '/images/parhlai.png',
        logoPath: '/images/parhlain.png',
        title: 'Backend Developer',
        date: 'November 2024 - Present',
        responsibilities: [
            'Developed and maintained backend services using Node.js and Express.',
            'Implemented RESTful APIs for seamless data exchange.',
            'Optimized database queries for improved performance.',
        ],
    },
];

const expLogos = [
    {
        name: 'logo1',
        imgPath: '/images/plogo.png',
    },
];

const testimonials = [];

const socialImgs = [
    {
        name: 'insta',
        icon: <SiInstagram size={24} />, // Use JSX for react-icons
        link: 'https://www.instagram.com/_spicify/',
    },
    {
        name: 'linkedin',
        icon: <SiLinkedin size={24} />, // Use JSX for react-icons
        link: 'https://linkedin.com/in/muhammad-talha-765624276',
    },
    {
        name: 'github',
        icon: <SiGithub size={24} />, // Use JSX for react-icons
        link: 'https://github.com/SpicyTalha',
    },
];

// constants.js
const techLogos = [
    { name: 'Bootstrap', class: 'devicon-bootstrap-plain colored text-5xl' },
    { name: 'C', class: 'devicon-c-plain colored text-5xl' },
    { name: 'C++', class: 'devicon-cplusplus-plain colored text-5xl' },
    { name: 'CSS3', class: 'devicon-css3-plain colored text-5xl' },
    { name: 'Express', class: 'devicon-express-original colored text-5xl' },
    { name: 'Firebase', class: 'devicon-firebase-plain colored text-5xl' },
    { name: 'Git', class: 'devicon-git-plain colored text-5xl' },
    { name: 'HTML5', class: 'devicon-html5-plain colored text-5xl' },
    { name: 'Java', class: 'devicon-java-plain colored text-5xl' },
    { name: 'JavaScript', class: 'devicon-javascript-plain colored text-5xl' },
    { name: 'Kotlin', class: 'devicon-kotlin-plain colored text-5xl' },
    { name: 'MongoDB', class: 'devicon-mongodb-plain colored text-5xl' },
    { name: 'MySQL', class: 'devicon-mysql-plain colored text-5xl' },
    { name: 'Node.js', class: 'devicon-nodejs-plain colored text-5xl' },
    { name: 'OpenCV', class: 'devicon-opencv-plain colored text-5xl' },
    { name: 'Python', class: 'devicon-python-plain colored text-5xl' },
    { name: 'React', class: 'devicon-react-original colored text-5xl' },
    { name: 'Redux', class: 'devicon-redux-original colored text-5xl' },
    {
        name: 'TailwindCSS',
        class: 'devicon-tailwindcss-plain colored text-5xl',
    },
    {
        name: 'TensorFlow',
        class: 'devicon-tensorflow-original colored text-5xl',
    },
    { name: 'TypeScript', class: 'devicon-typescript-plain colored text-5xl' },
    { name: 'NPM', class: 'devicon-npm-original-wordmark colored text-5xl' },
    { name: 'Yarn', class: 'devicon-yarn-plain colored text-5xl' },
    { name: 'Postman', class: 'devicon-postman-plain colored' },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projects,
    techLogos,
};
