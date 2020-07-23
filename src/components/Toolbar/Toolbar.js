import React from 'react';
import './Toolbar.css';


function toolbar() {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="#">Logo</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="/">AboutUs</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">ContactUs</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default toolbar;