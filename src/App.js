import './App.css';
import IntroBlock from './Components/IntroBlock';
import HeaderBlock from './Components/HeaderBlock';
import ShadowChris from './Components/ShadowChris';
import ChromaWitch from './Components/ChromaWitch';
import FreshFight from './Components/FreshFight';
import Zeitergeist from './Components/Zeitergeist';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    
    <div className="App">
      <HeaderBlock/>
      <IntroBlock/>
      <ShadowChris/>
      <ChromaWitch/>
      <FreshFight />
      <Zeitergeist/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
