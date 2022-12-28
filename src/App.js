
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
     img="Katie.png"
     rating="5.0"
     reviewCount={6}
     country="USA"
     title="Life Lessons with Katie"
     price={136}
     
     />

      
    </div>
  );
}

export default App;
