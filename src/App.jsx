import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './Portfolio/Portfolio';
import About from './Portfolio/About';
import Intro from './Portfolio/Intro';
import Project from './Portfolio/Project';
import Skills from './Portfolio/Skills';
import Contact from './Portfolio/Contact';
import Education from './Portfolio/Education';
import './index.css';


function App() {


  return (
    <>

      <Portfolio />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact />

    </>
  )
}

export default App
