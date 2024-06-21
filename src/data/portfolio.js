import portfolioImage from '../../src/assets/pictures/portfolio.webp';
import apocalypseImage from '../../src/assets/pictures/apocalypse.webp';
import wipImage from '../../src/assets/pictures/wip.png';

export default [
  {
    id: 1,
    title: 'CV & Portfolio',
    description:
      "Ce CV en ligne m'a permis de mettre en pratique les connaissances acquises lors de ma spécialisation React. J'ai pu développer des compétences essentielles en création de composants interactifs, gestion d'état avec Hooks et intégration de bibliothèques tierces. Ce projet m'a également permis d'améliorer ma maîtrise du préprocesseur SASS. En appliquant les concepts de React à un projet concret, j'ai consolidé mon expertise et suis désormais prêt à relever de nouveaux défis professionnels dans le développement front-end.",
    picture: portfolioImage,
    isReady: true,
    siteUrl: 'https://surge-dist.surge.sh',
    repoUrl: 'https://github.com/DavidBASSI21/cv-react-2',
    technos: ['ReactJS', 'Sass'],
  },
  {
    id: 2,
    title: "Apo'calypse",
    picture: apocalypseImage,
    description:
      "Projet de fin de formation réalisé en un mois. L'objectif était de réaliser un MVP dans un contexte professionnel.",
    // picture:
    //   'https://www.copycat.dev/blog/wp-content/uploads/2022/12/REact-Redux.png',
    isReady: false,
    siteUrl: '',
    repoUrl: '',
    technos: ['ReactJs', 'Redux', 'SaSS', 'Symfony'],
  },
  {
    id: 3,
    title: 'En cours',
    description:
      'Ce projet est encore en cours de réalisation et sera bientôt disponible',
    picture: wipImage,
    isReady: false,
    siteUrl: '',
    repoUrl: '',
    technos: ['ReactJS', 'SaSS'],
  },
];
