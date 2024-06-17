import portfolioImage from '../../src/assets/pictures/portfolio.webp';
import apocalypseImage from '../../src/assets/pictures/apocalypse.webp';
import wipImage from '../../src/assets/pictures/wip.png';

export default [
  {
    id: 1,
    title: 'CV & Portfolio',
    description:
      "Ce portfolio m'a permis de mettre en pratique les notions apprises au cours de la formation. Il a été réalisé en react.",
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
