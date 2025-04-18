const navLinks = [
    {
        name: 'Work',
        link: '#work',
    },
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
];

const projects = [
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/portfolio',
        image: '/images/projects/portfolio.png',
    },
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/task-manager',
        image: '/images/projects/task-manager.png',
    },
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/weather-app',
        image: '/images/projects/weather-app.png',
    },
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/ecommerce-store',
        image: '/images/projects/ecommerce.png',
    },
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/chat-app',
        image: '/images/projects/chat-app.png',
    },
    {
        title: 'Title',
        description:
            'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        github: 'https://github.com/yourusername/blog-platform',
        image: '/images/projects/blog.png',
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
    {
        name: 'React Developer',
        modelPath: '/models/react_logo-transformed.glb',
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: 'Backend Developer',
        modelPath: '/models/node-transformed.glb',
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: 'Interactive Developer',
        modelPath: '/models/three.js-transformed.glb',
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: 'Project Manager',
        modelPath: '/models/git-svg-transformed.glb',
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: 'Talha brought creativity and technical expertise to the team, significantly improving our backend performance. His work has been invaluable in delivering faster experiences.',
        imgPath: '/images/parhlai.png',
        logoPath: '/images/plogo.png',
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
        imgPath: '/images/insta.png',
    },
    {
        name: 'x',
        imgPath: '/images/x.png',
    },
    {
        name: 'linkedin',
        imgPath: '/images/linkedin.png',
    },
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
};
