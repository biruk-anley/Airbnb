
import './App.css'

import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import data from './data';



const App = () => {
  
  const cards = data.map(item => {
    return (
        <Hero
          imgs={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
        />
    );
  });
  return (
    <div>
      <Header />
      {cards}
      <Hero/>
    </div>
  )
}

export default App;
