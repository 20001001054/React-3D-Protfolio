import { BrowserRouter } from "react-router-dom";

import { About,Experience, Hero, Navbar, Tech, Works } from "./components";
import {StarsCanvas} from './components'
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact/>
        <div className='relative z-0'>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;