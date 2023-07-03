import TextBox from "./components/TextBox";
import Title from "./components/Title";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";
import TechSection from "./components/TechSection";
import Card from "./components/Card";
import ProjectsSection from "./components/ProjectSection";
import useSetLanguage from "./hooks/useSetLanguage";

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
        <Card lang={lang} img="/js-logo.png" title="JavaScript" text="My first contact with JS was even before college, when I did a simple JS course in YouTube, given by Curso em Video. Then, I had contact again with JS in college, and that made me very interested in learning Web Development in General. Because of that interest, I started FullStack JavaScript, a course given by OneBitCode. Through this course, I delved deeper into JavaScript." url="https://github.com/EnzoBozzani/search-countries-project"/> 
        <Card lang={lang} img="/html-css.png" title="HTML & CSS" text="Just like JavaScript, I had my first contact with HTML and CSS before college, in the same YouTube course. After that, in college, I dealt with these technologies again in the Web Development subject. These technologies, just like JS, were explored in greater depth in the FullStack JavaScript course." url="https://github.com/EnzoBozzani/landing-page"/> 
        <Card lang={lang} img="/ts-logo.png" title="TypeScript" text="I learned TypeScript during the same course, and since then, it has undoubtedly become my preferred programming language. Nowadays, TypeScript is a fundamental part of almost all my web projects. Throughout the course, I gained a solid understanding of TypeScript's features and benefits. Using TypeScript has made my development experience more efficient and enjoyable. " url="https://github.com/EnzoBozzani/github-api"/> 
        <Card lang={lang} img="/sass-logo.png" title="SCSS/SASS & BootStrap" text="During the FullStack JavaScript course, I gained knowledge about SASS/SCSS and Bootstrap. These technologies have played a crucial role in my career as a developer, enabling me to create advanced styles and responsive interfaces efficiently. Currently, these technologies are an essential part of my workflow. I use SASS/SCSS to write more robust, modular, and easily maintainable styles. Bootstrap allows me to customize its components based on the requirements of each project, making it easier to develop visually appealing web interfaces." url="https://github.com/EnzoBozzani/spacex"/> 
        <Card lang={lang} img="/reacr-logo.png" title="React" text=" I learned React through the same course and have been extensively using it, including for the complete construction of this portfolio.  I have been using React in various projects, its component-based approach and optimized performance have been instrumental in developing efficient web applications." url="#"/>
      </TechSection>
      <ProjectsSection lang={lang} />
      <footer className="w-100 d-flex flex-column justify-content-center align-items-center">
        <span className="d-block ms-5">Other Social Media</span>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <a className="main-color">@enzobozzani</a><a href="https://www.instagram.com/enzobozzani/"  target="_blank" className="main-color">Instagram</a><a href="https://twitter.com/enzobozzani" target="_blank" className="main-color">Twitter</a>
        </div>
      </footer>
    </>
  )
}

export default App