import React from 'react';
import './Toolbar.css';


function toolbar() {
    return (
        <header className="toolbar" id="tool_up">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo"><a href="#">Logo</a></div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href="#abt_u">AboutUs</a></li>
                        <li><a href="#team_s">Team</a></li>
                        <li><a href="#footer_s">ContactUs</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default toolbar;