import { Title, ContainerAbout, Div } from './styled';
import fotoPerfil from '../../images/foto-perfil.png';
import { Stacks } from '../stackList';
import { useEffect } from 'react';
import { useScroll } from '../../utils/handleScroll';

export const About = () => {
  const [visible, setPixelsValue] = useScroll();

  useEffect(() => {
    setPixelsValue(2100);
  });

  return (
    <div>
      <Title>SOBRE</Title>
      <Div visible={visible}>
        <ContainerAbout>
          <img src={fotoPerfil} alt="foto do autor vitor oliveira silva" />
          <div>
            <p>
              Desenvolvedor Web Full Stack, sempre em busca de novos
              conhecimentos e aprendizados, quero fazer parte e contribuir com o
              ecossistema digital, isso me levou a decisão de migrar de carreira
              do setor operacional, onde trabalhei nos últimos anos, para área
              de TI.
            </p>
            <p>
              Sou graduado em Análise e Desenvolvimento de Sistemas pela Una e
              formano no curso de Desenvolvimento Web Full Stack na trybe;
            </p>
            <p>
              Atualmente me especializei na linguagem JS e seus frameworks, mas
              me considero uma pessoa totalmente adaptável e gosto de novos
              desafios.
            </p>
          </div>
        </ContainerAbout>
        <Title>STACKS</Title>
        <Stacks />
      </Div>
    </div>
  );
};
