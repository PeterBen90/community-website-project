import React, { Component } from 'react';
import '../componentStyles/NavBar.css';
// import Scroll from 'react-scroll';
// import Fade from 'react-reveal/Fade';

import { slide as Menu } from 'react-burger-menu';

class NavBar extends Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu>
                <div className="title-item">Churchill Meadows</div>
                <a
                    id="home"
                    className="menu-item"
                    onClick={() => (window.location = '/')}
                >
                    Home
                </a>
                <a id="about" className="menu-item" href="/about">
                    About
                </a>
                <a id="contact" className="menu-item" href="/contact">
                    Contact
                </a>
            </Menu>
        );
    }
}

export default NavBar;
