import TextBox from "./components/TextBox";
import Title from "./components/Title";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import TechSection from "./components/TechSection";
import Card from "./components/Card";

function App() {

  return (
    <>
      <NavBar/>
      <Title/>
      <TextBox text="I'm a 19-year-old tech enthusiast, totally into software development. I live in Santos, SP (Brazil), and I'm studying Computer Science at Centro Universitário FEI (university) while diving into Web Development at OneBitCode (online course). As I mentioned, my main focus right now is Web Development because I'm super stoked about working in this field. If you've got any suggestions, feel free to hit me up! I appreciate any help. Thanks!"/>
      <Accordion/>
      <p className="display-5 text-center w-100 mb-5" style={{color: "#01003f"}}>Technologies</p>
      <TechSection>
        <Card img="/js-logo.png" title="JavaScript" text="My first contact with JS was even before college, when I did a simple JS course in YouTube, given by Curso em Video. Then, I had contact again with JS in college, and that made me very interested in learning Web Development in General. Because of that interest, I started FullStack JavaScript, a course given by OneBitCode. Through this course, I delved deeper into JavaScript." url="#"/> 
        <Card img="/html-css.png" title="HTML & CSS" text="Just like JavaScript, I had my first contact with HTML and CSS before college, in the same YouTube course. After that, in college, I dealt with these technologies again in the Web Development subject. These technologies, just like JS, were explored in greater depth in the FullStack JavaScript course." url="#"/> 
        <Card img="/ts-logo.png" title="TypeScript" text="I've learned TS through the same course and, since I've discovered it, it became without doubts my most used programming language. Nowadays, I use TypeScript in almost all web projects." url="#"/> 
        <Card img="/sass-logo.png" title="SCSS/SASS & BootStrap" text="I've learned TS through OneBitCode course and it became my favourite language. I use TS in almost every project." url="https://github.com/EnzoBozzani/spacex"/> 
        <Card img="/reacr-logo.png" title="React" text="React ..." url="#"/>
      </TechSection>
      <Carousel/>
    </>
  )
}

export default App

//colocar os links para os projetos:
//JS, CSS and HTML -> Calculadora 
//SCSS and BootStrap -> SpaceX CLone
//TypeScript and React -> GitHub API
//Mencionar que tal portfólio foi feito usando React, SCSS e BootStrap
