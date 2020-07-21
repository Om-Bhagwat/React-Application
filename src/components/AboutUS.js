import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


function AboutUs() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="flex-container oj" id="content-mobile">
            <div>
                <div class=" container">
                    <h2 data-aos="fade-up" style={{ color: "blue" }}>About Us</h2>
                    <p data-aos="fade-up"><strong>"The art of communication is the language of leadership."</strong></p>
                    <p data-aos="fade-up" id="ght">We believe in making an individual a master of words, a master of their communication skills. Our objective is to raise the morale of students and work towards creating a society of confident and ambitious people.</p>
                    <p data-aos="fade-up">Starting out as a small initiative, today we are proud to be one of the best chapters in VIT, with hopes of growing and achieving even greater heights.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs 