import React from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

function App (){
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Card />
      

    </div>
  )
}

export default App;