import { ContainerStacks } from './styled';
import {
  SiJavascript,
  SiReact,
  SiCss3,
  SiRedux,
  SiMysql,
  SiDocker,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { StackCard } from '../stackCard';

export const Stacks = () => {
  return (
    <ContainerStacks>
      <StackCard icon={<SiJavascript />} name="JavaScript" />
      <StackCard icon={<SiReact />} name="React" />
      <StackCard icon={<SiCss3 />} name="CSS" />
      <StackCard icon={<SiRedux />} name="Redux e Context" />
      <StackCard icon={<SiMysql />} name="Mysql" />
      <StackCard icon={<SiDocker />} name="Docker" />
      <StackCard icon={<SiTypescript />} name="TypeScript" />
      <StackCard icon={<FaNodeJs />} name="NodeJS" />
      <StackCard icon={<SiExpress />} name="Express" />
      <StackCard icon={<SiMongodb />} name="MongoDB" />
    </ContainerStacks>
  );
};
