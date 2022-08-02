import { Container, Link } from './styled,';
import 'animate.css';
import { useEffect, useState } from 'react';

export function Welcome() {
  const [visibleLink, setVisibleLink] = useState(false);

  const handleVisibleLInk = () => {
    setTimeout(() => {
      setVisibleLink(true);
    }, 5700);
  };

  useEffect(() => {
    handleVisibleLInk();
  }, []);

  return (
    <>
      <Container id="welcome">
        <p>{`Olá , seja Bem vindo ao meu portifolio! =)`}</p>
        {visibleLink && (
          <Link href="#projects" className="animate__animated animate__fadeIn">
            Saiba mais
          </Link>
        )}
      </Container>
    </>
  );
}
