import PropTypes from 'prop-types';
import { ContainerCard, Pabout, Link } from './styled';
import 'animate.css';

export const ProjectCard = ({ title, about, url, linkGitHub }) => {
  return (
    <ContainerCard>
      <div>
        <h3>{title}</h3>
        <img width={'90%'} src={url} />
      </div>
      <Pabout>{about}</Pabout>
      <Link href={linkGitHub} target="_blank">
        GitHub
      </Link>
    </ContainerCard>
  );
};

ProjectCard.propTypes = {
  about: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string.isRequired,
};
