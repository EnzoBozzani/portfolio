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
      <TechSection>
        <Card img="/html-css.png" title="HTML & CSS" text="I've learned TS through OneBitCode course and it became my favourite language. I use TS in almost every project." url="#"/> 
        <Card img="/js-logo.png" title="JavaScript" text="My first contact with JS was even before college, when I did a simple JS course in YouTube, given by Curso em Video. Then, I had contact again with JS in college, and that made me very interested in learning Web Development in General. Because of that interest, I started FullStack JavaScript, a course given by OneBitCode. Through this course, I delved deeper into JavaScript." url="#"/> 
        <Card img="/ts-logo.png" title="TypeScript" text="I've learned TS through OneBitCode course and it became my favourite language. I use TS in almost every project." url="#"/> 
        <Card img="/html-css.png" title="HTML & CSS" text="I've learned TS through OneBitCode course and it became my favourite language. I use TS in almost every project." url="#"/> 
      </TechSection>
      <Carousel/>
    </>
  )
}

export default App
