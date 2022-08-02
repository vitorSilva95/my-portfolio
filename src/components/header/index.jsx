import { HeaderContainer, Link, OlNav, Title } from './styled';
import { useScroll } from '../../utils/handleScroll';
import { useEffect } from 'react';
import { dataNavigation } from '../../data/data';

export function Header() {
  const [visible, setPixelsValue] = useScroll();

  useEffect(() => {
    setPixelsValue(10);
  });

  return (
    <HeaderContainer>
      <Title>VITOR SILVA .</Title>
      {visible && (
        <OlNav>
          {dataNavigation.map(({ name, href }) => (
            <Link key={name} href={href}>
              {name}
            </Link>
          ))}
        </OlNav>
      )}
    </HeaderContainer>
  );
}
