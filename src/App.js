
import './App.css'

import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import data from './data';



const App = () => {
  
  const cards = data.map(item => {
    return (
      <Hero
        item = {item}
        />
    );
  });
  return (
    <div>
      <Header />
      <section className='card-list'>
        {cards}
      </section>
      
      {/* <Hero/> */}
    </div>
  )
}

export default App;
