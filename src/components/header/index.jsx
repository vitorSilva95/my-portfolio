import { HeaderContainer, Link, OlNav } from './styled';
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
      <h1>VITOR SILVA .</h1>
      {visible && (
        <OlNav>
          {dataNavigation.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </OlNav>
      )}
    </HeaderContainer>
  );
}
