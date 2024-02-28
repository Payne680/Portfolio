import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  quiz,
  movieDB,
  shuffle,
  bowling,
  // nyeusi,
  // space,
  coverhunt,
  dcc,
  // kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile Developer',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Mobile Developer',
    company_name: 'PettyCash Global',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - Oct 2023',
  },
  {
    title: 'ALX Software Engineer',
    company_name: 'AlX Software Engineering',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2023 - Present',
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  {
    title: 'Back-End Developer',
    company_name: 'Vmedia Consulting',
    icon: dcc,
    iconBg: '#333333',
    date: 'Nov 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Quiz App',
    description: 'Web app that presents to you a series of question to answer either using True or false.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: quiz,
    repo: 'https://github.com/Payne680/React-Quiz-webapp',
    demo: 'https://react-quiz-web-app.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Movie DB',
    description:
      `A movie web app used to search for the latest movies and it's details.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: movieDB,
    repo: 'https://github.com/Payne680/movieDB',
    demo: 'https://moviedb-webapp.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'Shuffle Images',
    description: 'This is a single-page web app used to suffle images and it was built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: shuffle,
    repo: 'https://github.com/Payne680/Shuffle-images-react.js',
    demo: 'https://shuffle-images.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Bowling Game',
    description: `A single-page application that allows users to play a bowling game by clicking on the check button.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bowling,
    repo: 'https://github.com/Payne680/JS-Bowling-Game',
    demo: 'https://jsbowling-game.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
