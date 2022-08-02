import { About } from '../../components/about';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { ProjectCardList } from '../../components/projectList';
import { Welcome } from '../../components/welcome';

export function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <ProjectCardList />
      <About />
      <Footer />
    </div>
  );
}
