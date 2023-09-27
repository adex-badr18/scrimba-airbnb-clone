import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cardData = data.map(item => {
    return <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  })

  return (
    <div className='container'>
      <Navbar />

      <main>
        <Hero />

        <section className="cards-list">
          {cardData}
        </section>

      </main>
    </div>
  )
}

export default App

/*
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/