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
      <StackCard icon={<SiJavascript size={50} />} name="JavaScript" />
      <StackCard icon={<SiReact size={50} />} name="React" />
      <StackCard icon={<SiCss3 size={50} />} name="CSS" />
      <StackCard icon={<SiRedux size={50} />} name="Redux e Context" />
      <StackCard icon={<SiMysql size={50} />} name="Mysql" />
      <StackCard icon={<SiDocker size={50} />} name="Docker" />
      <StackCard icon={<SiTypescript size={50} />} name="TypeScript" />
      <StackCard icon={<FaNodeJs size={50} />} name="NodeJS" />
      <StackCard icon={<SiExpress size={50} />} name="Express" />
      <StackCard icon={<SiMongodb size={50} />} name="MongoDB" />
    </ContainerStacks>
  );
};
