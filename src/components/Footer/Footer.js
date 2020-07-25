import React from 'react';
import './Footer.css';
function FooterS() {
    return (

        <footer class="page-footer font-small teal pt-4">
            <div class="container-fluid text-center text-md-left footer_first">
                <div class="row">
                    <div class="col-md-6 mt-md-0 mt-3">
                        <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
                        repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
          harum esse fugiat. Itaque, culpa?</p>
                        <h5>Follow Us on</h5>
                        <div className="icons">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="col-md-6 mb-md-0 mb-3">
                        <h5 class="text-uppercase font-weight-bold">Contact Us</h5>
                        <div className="input_type">
                            <div><input type="name" placeholder="name" ></input></div>
                            <div><input type="email" placeholder="email"></input></div>
                            <div><input type="text" className="input_type_message" placeholder="message"></input></div>
                            <div><button className="btn btn-primary submit">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright text-center py-3 footer_second">© 2020 Copyright:
                <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
        </footer >
    );
}

export default FooterS