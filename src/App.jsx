import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <Navbar />

      <main>
        <Hero />
        <Card 
          img='card-img.png'
          rating='5.0'
          reviewCount={6}
          country='Nigeria'
          title='Life Lessons with Katie Zaferes'
          price='136'
        />
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