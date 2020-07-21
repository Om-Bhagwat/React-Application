import React from "react"

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light boom de">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active hola">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item hi">
                        <a class="nav-link" href="#">Our Team</a>
                    </li>
                    <li class="nav-item bye">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar