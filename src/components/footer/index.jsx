import { ContainerFooter, Title, Div, Link, P } from './styled';
import { dataIcons } from '../../data/data';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useState } from 'react';

export const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleClipBoard = (url) => {
    if (url.includes('@gmail.com')) {
      setIsCopied(true);
      navigator.clipboard.writeText(url);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  return (
    <Div>
      <Title id="contact">CONTATO</Title>
      <ContainerFooter>
        <ol>
          {dataIcons.map(({ icon, url }, index) => (
            <li key={index}>
              <Link
                href={url.includes('@gmail.com') ? false : url}
                onClick={() => handleClipBoard(url)}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ol>
      </ContainerFooter>
      <P isCopied={isCopied}>E-mail Copiado</P>
      <h5>
        <span>
          <HiOutlineLocationMarker />
        </span>
        Betim , Minas Gerais
      </h5>
      <h5>©2021</h5>
    </Div>
  );
};
