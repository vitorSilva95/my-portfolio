import { ContainerCards, Title } from './styled';
import { useEffect } from 'react';
import { useScroll } from '../../utils/handleScroll';
import { dataProjects } from '../../data/data.js';
import { ProjectCard } from '../projectCard';

export function ProjectCardList() {
  const [visible, setPixelsValue] = useScroll();

  useEffect(() => {
    setPixelsValue(500);
  });

  return (
    <div id="projects">
      <Title>PROJETOS</Title>
      <ContainerCards visible={visible}>
        {dataProjects.map(({ id, title, url, about, linkGitHub }) => (
          <ProjectCard
            key={id}
            title={title}
            url={url}
            about={about}
            linkGitHub={linkGitHub}
          />
        ))}
      </ContainerCards>
    </div>
  );
}
