import imgTFC from '../images/imgTFC.png';
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';

export const dataProjects = [
  {
    id: 1,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    linkGitHub: 'https://github.com/vitorSilva95/trybe-futebol-clube',
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
  {
    id: 2,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
  {
    id: 3,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
  {
    id: 4,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
  {
    id: 5,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
  {
    id: 6,
    title: 'Trybe Futebol Clube',
    url: imgTFC,
    about:
      'O app trybe futebol clube , consiste em uma aplicação que mostra a classificação de acordo com o resultado dos jogos de cada time. Nesse projeto o frontend foi feito por parte da trybe.',
  },
];

export const dataNavigation = [
  { name: 'Inicio', href: '#welcome' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Sobre/Stacks', href: '#about' },
  { name: 'Contato', href: '#contact' },
];

export const dataIcons = [
  {
    icon: <SiGithub size={50} />,
    url: 'https://github.com/vitorSilva95',
  },

  {
    icon: <SiWhatsapp size={50} />,
    url: 'https://web.whatsapp.com/send?phone=5531999325928"',
  },
  {
    icon: <SiLinkedin size={50} />,
    url: 'https://www.linkedin.com/in/vitor-oliveira-silva-dev/',
  },
  {
    icon: <AiOutlineMail size={50} />,
    url: 'vitor.o.silva95@gmail.com',
  },
];
