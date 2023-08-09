import TextBox from "./components/TextBox";
import Title from "./components/Title";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";
import TechSection from "./components/TechSection";
import ProjectsSection from "./components/ProjectSection";
import useSetLanguage from "./hooks/useSetLanguage";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/TechSection/Carousel";

function App() {
  const { lang, changeLang } = useSetLanguage();

  return (
    <>
      <NavBar lang={lang} changeLang={changeLang}/>
      <Title lang={lang} />
      <TextBox  lang={lang}/>
      <Accordion lang={lang} />
      <p className="display-5 text-center w-100 mb-5 main-color">{lang !== '🇺🇸 (EN-US)' ? 'Technologies' : 'Tecnologias'}</p>
      <TechSection>
        <Carousel lang={lang}/>
      </TechSection>
      <ProjectsSection lang={lang} />
      <Footer lang={lang}/>
    </>
  )
}

export default App