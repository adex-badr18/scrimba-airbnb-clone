import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {
  const cardData = data.map(item => {
    return <Card
      key={item.id}
      {...item} // Spread operator
      // item={item}
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