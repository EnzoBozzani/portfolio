import TextBox from "./components/TextBox";
import Title from "./components/Title";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";
import TechSection from "./components/TechSection";
import Card from "./components/Card";
import ProjectsSection from "./components/ProjectSection";
import useSetLanguage from "./hooks/useSetLanguage";
import { Footer } from "./components/Footer";

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
        <Card
          lang={lang}  
          img="/js-logo.png" 
          title="JavaScript" 
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "My first contact with JS was even before college, when I did a simple JS course in YouTube, given by Curso em Video. Then, I had contact again with JS in college, and that made me very interested in learning Web Development in General. Because of that interest, I started FullStack JavaScript, a course given by OneBitCode. Through this course, I delved deeper into JavaScript." 
              :
              "Meu primeiro contato com JavaScript foi antes mesmo da faculdade, quando fiz um curso simples de JS no YouTube, ministrado pelo Curso em Vídeo. Depois, tive contato novamente com JavaScript na faculdade, e isso despertou meu interesse em aprender Desenvolvimento Web de forma geral. Devido a esse interesse, comecei o curso FullStack JavaScript, oferecido pela OneBitCode. Através desse curso, aprofundei meus conhecimentos em JavaScript."
          }
          url="https://github.com/EnzoBozzani/search-countries-project"
        /> 
        <Card
          lang={lang}  
          img="/html-css.png" 
          title="HTML & CSS" 
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "Just like JavaScript, I had my first contact with HTML and CSS before college, in the same YouTube course. After that, in college, I dealt with these technologies again in the Web Development subject. These technologies, just like JS, were explored in greater depth in the FullStack JavaScript course." 
              :
              "Assim como JavaScript, tive meu primeiro contato com HTML e CSS antes da faculdade, no mesmo curso do YouTube. Depois disso, na faculdade, lidei com essas tecnologias novamente na disciplina de Desenvolvimento Web. Essas tecnologias, assim como JS, foram exploradas com maior profundidade no curso de FullStack JavaScript."
          }
          url="https://github.com/EnzoBozzani/landing-page"
        /> 
        <Card
          lang={lang} 
          img="/ts-logo.png" 
          title="TypeScript"
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "I learned TypeScript during the same course, and since then, it has undoubtedly become my preferred programming language. Nowadays, TypeScript is a fundamental part of almost all my web projects. Throughout the course, I gained a solid understanding of TypeScript's features and benefits. Using TypeScript has made my development experience more efficient and enjoyable." 
              :
              "Aprendi TypeScript durante o mesmo curso e, desde então, sem dúvida, se tornou minha linguagem de programação preferida. Hoje em dia, o TypeScript é uma parte fundamental em quase todos os meus projetos web. Ao longo do curso, adquiri um sólido entendimento das características e benefícios do TypeScript. O uso do TypeScript tornou minha experiência de desenvolvimento mais eficiente e prazerosa."
          } 
          url="https://github.com/EnzoBozzani/github-api"
        /> 
        <Card
          lang={lang}  
          img="/sass-logo.png" 
          title="SCSS/SASS & BootStrap" 
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "During the FullStack JavaScript course, I gained knowledge about SASS/SCSS and Bootstrap. These technologies have played a crucial role in my career as a developer, enabling me to create advanced styles and responsive interfaces efficiently. Currently, these technologies are an essential part of my workflow. I use SASS/SCSS to write more robust, modular, and easily maintainable styles. Bootstrap allows me to customize its components based on the requirements of each project, making it easier to develop visually appealing web interfaces." 
              :
              "Durante o curso de FullStack JavaScript, adquiri conhecimento sobre SASS/SCSS e Bootstrap. Essas tecnologias desempenharam um papel crucial em minha carreira como desenvolvedor, permitindo-me criar estilos avançados e interfaces responsivas de forma eficiente. Atualmente, essas tecnologias são uma parte essencial do meu fluxo de trabalho. Eu utilizo o SASS/SCSS para escrever estilos mais robustos, modulares e de fácil manutenção. O Bootstrap me permite personalizar seus componentes de acordo com os requisitos de cada projeto, tornando mais fácil o desenvolvimento de interfaces web visualmente atraentes."
          } 
          url="https://github.com/EnzoBozzani/spacex"
        /> 
        <Card
          lang={lang}  
          img="/reacr-logo.png" 
          title="React" 
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "I learned React through the same course and have been extensively using it, including for the complete construction of this portfolio.  I have been using React in various projects, its component-based approach and optimized performance have been instrumental in developing efficient web applications." 
              :
              "Aprendi React durante o mesmo curso e tenho utilizado amplamente, inclusive para a construção completa deste portfólio. Tenho utilizado o React em diversos projetos, sua abordagem baseada em componentes e desempenho otimizado têm sido fundamentais no desenvolvimento de aplicações web eficientes."
          }
          url="https://github.com/EnzoBozzani/portfolio"
        />
        <Card
          lang={lang}  
          img="/node.png" 
          title="NodeJS" 
          text={
            lang !== '🇺🇸 (EN-US)' ? 
              "My first contact with Node.js happened in college, during the Web Development course. Although it was a brief introduction, that experience sparked my interest in delving deeper into this powerful technology. During the FullStack JS course, I had the opportunity to dive deeper into the Node.js ecosystem, exploring its features and functionalities, and starting my journey in backend development." 
              :
              "Meu primeiro contato com o Node.js ocorreu na faculdade, durante a disciplina de Desenvolvimento Web. Embora tenha sido uma introdução breve, essa experiência despertou meu interesse em explorar mais a fundo essa poderosa tecnologia. Durante o curso FullStack JS, pude mergulhar mais profundamente no ecossistema do Node.js, explorando seus recursos e funcionalidades e iniciando minha trajetória no desenvolvimento back-end."
          }
          url="https://github.com/EnzoBozzani/to-do-list"
        />
      </TechSection>
      <ProjectsSection lang={lang} />
      <Footer lang={lang}/>
    </>
  )
}

export default App