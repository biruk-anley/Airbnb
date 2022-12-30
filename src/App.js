
import './App.css'

import Header from './Components/Header';
import Hero from './Components/Hero';
import MainContent from './Components/MainContent';
import data from './data';



const App = () => {
  
  const cards = data.map(item => {
    return (
      <Hero
        //key is for manipulating difference..wanring will be removed
          key={item.id}
          imgs={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots = {item.openSpots}
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
