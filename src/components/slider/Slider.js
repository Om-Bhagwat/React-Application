import React from 'react';
import './Slider.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function SliderI() {
    return (
        <div className="yamato">
            <div className="slider" data-aos="fade-up">
                <div className="slide"><p></p></div>
                <div className="slide"><p></p></div>
                <div className="slide"><p></p></div>
                <div className="slide"><p></p></div>
            </div>
        </div>
    );
}

export default SliderI