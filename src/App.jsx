import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skill from "./components/Skill"

function App() {
  return (
    <>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Skill/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}
export default App
