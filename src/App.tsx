import TextBox from "./components/TextBox/TextBox";
import ArrowBox from "./components/Arrow/ArrowBox";
import Title from "./components/Title/Title";

function App() {

  return (
    <>
      <TextBox text="Hey! 👋 I'm a 19-year-old tech enthusiast, totally into software development. I live in Santos, SP (Brazil), and I'm studying Computer Science at Centro Universitário FEI (university) while diving into Web Development at OneBitCode (online course). As I mentioned, my main focus right now is Web Development because I'm super stoked about working in this field. If you've got any suggestions, feel free to hit me up! I appreciate any help. Thanks!"/>
      <ArrowBox direction="Right"/>
      <TextBox text="Essa é minha faculdade"/>
      <Title/>
      <ArrowBox direction="Down"/>
      <TextBox text="Essa é minha faculdade"/> 
      <ArrowBox direction="Left"/>
      <TextBox text="Essa é minha faculdade"/>
      <ArrowBox direction="Right"/>
      <ArrowBox direction="Right"/>
      <ArrowBox direction="Right"/>
      <ArrowBox direction="Right"/>
      <ArrowBox direction="Right"/>
      <ArrowBox direction="Right"/>
    </>
  )
}

export default App
