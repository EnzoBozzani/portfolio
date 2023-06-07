import TextBox from "./components/TextBox";
import ArrowBox from "./components/Arrow/ArrowBox";
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
        <Card img="/ts-logo.png" title="TypeScript" text="I've learned TS through OneBitCode course and it became my favourite language. I use TS in almost every project." url="#"/> 
      </TechSection>
      <Carousel/>
    </>
  )
}

export default App
