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
      <StackCard icon={<SiJavascript size={60} />} name="JavaScript" />
      <StackCard icon={<SiReact size={60} />} name="React" />
      <StackCard icon={<SiCss3 size={60} />} name="CSS" />
      <StackCard icon={<SiRedux size={60} />} name="Redux e Context" />
      <StackCard icon={<SiMysql size={60} />} name="Mysql" />
      <StackCard icon={<SiDocker size={60} />} name="Docker" />
      <StackCard icon={<SiTypescript size={60} />} name="TypeScript" />
      <StackCard icon={<FaNodeJs size={60} />} name="NodeJS" />
      <StackCard icon={<SiExpress size={60} />} name="Express" />
      <StackCard icon={<SiMongodb size={60} />} name="MongoDB" />
    </ContainerStacks>
  );
};
