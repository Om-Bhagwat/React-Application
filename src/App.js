import React from 'react';
import logo from './logo.svg';
import './App.css';
/*import Navbar from './components/Navbar';*/
import CoverPic from './components/CoverPic';
import AboutUs from './components/AboutUS';
import Cards from './components/Cards';
import Cardsn from './components/Cardsn';
import CardsE from './components/CardsE';
import Toolbar from './components/Toolbar/Toolbar';
import SliderI from './components/slider/Slider';
import FooterS from './components/Footer/Footer';
function App() {
  return (
    <div style={{ height: '100%' }}>
      <Toolbar />
      <CoverPic />
      <AboutUs />
      <div className="gallery">
        <h3>Gallery</h3>
      </div>
      <div className="gallery_line">
        <div></div>
      </div>
      <SliderI />
      <div className="team" id="team_s">
        <h3>Team</h3>
      </div>
      <div className="gallery_line">
        <div></div>
      </div>
      <Cards />
      <Cardsn />
      <CardsE />
      <FooterS />
    </div>
  );
}

export default App;
