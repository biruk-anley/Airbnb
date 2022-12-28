
import './App.css'

import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';

const App= ()=> {
  return (
    <div className="App">
     <Header/>
     {/* <MainContent/> */}
     <Hero
     img="katie.png"
     rating="5.0"
     reviewCount={6}
     country="USA"
     title="Life Lessons with Katie zaferes"
     price={136}
     
     />

      
    </div>
  );
}

export default App;
