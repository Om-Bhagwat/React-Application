import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CoverPic from './components/CoverPic';
import AboutUs from './components/AboutUS';
import Cards from './components/Cards';
import Cardsn from './components/Cardsn';
import CardsE from './components/CardsE';

function App() {
  return (
    <div>
      <Navbar />
      <CoverPic />
      <AboutUs />
      <Cards />
      <Cardsn />
      <CardsE />
    </div>
  );
}

export default App;
