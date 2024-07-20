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
      "Ce projet de fin de formation a été réalisé de A à Z dans un délai imparti d'un mois réparti en 4 sprints. Il s'agissait ici de rédiger le cahier des charges, la charte graphique, construire les wireframes et maquettes dans le but de réaliser un MVP. Certains bugs n'ont pas encore pu être corrigés (actualisation de la page par exemple).",
    // picture:
    //   'https://www.copycat.dev/blog/wp-content/uploads/2022/12/REact-Redux.png',
    isReady: true,
    siteUrl: 'https://www.apocalypse.davidbassi.fr/',
    repoUrl: 'https://github.com/O-clock-Liegeois/projet-17-apo-calypse-front',
    technos: ['ReactJs', 'Redux', 'Sass', 'Symfony'],
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
    technos: ['ReactJS', 'Sass'],
  },
];
