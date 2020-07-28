import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function CardsE() {
    return (
        <div className="flex-container fd" data-aos="fade-up">
            <div>
                <div class="card-container asq">
                    <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                    <h3 id="az">Pulkit singhal</h3>
                    <h6 id="as">chairperson</h6>
                    <p id="aq">User interface designer and <br /> front-end developer</p>
                    <div className="buttons">
                        <div><i class="fa fa-facebook-f"></i></div>
                        <div><i class="fa fa-github"></i></div>
                        <div><i class="fa fa-instagram"></i></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="card-container asq">
                    <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                    <h3 id="az">Ricky Park</h3>
                    <h6 id="as">New York</h6>
                    <p id="aq">User interface designer and <br /> front-end developer</p>
                    <div className="buttons">
                        <div><i class="fa fa-facebook-f"></i></div>
                        <div><i class="fa fa-github"></i></div>
                        <div><i class="fa fa-instagram"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardsE