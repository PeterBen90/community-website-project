import React, { Component } from 'react';

import '../componentStyles/TopNav.css';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

class TopNav extends Component {
    render() {
        let Link = Scroll.Link;
        return (
            <section className="Nav">
                <Fade top>
                    <div className="nav-name">
                        <a
                            onClick={() => (window.location = '/')}
                            className="home-name"
                        >
                            <i class="fa fa-leaf" aria-hidden="true" />
                        </a>
                    </div>
                </Fade>
                <Fade top>
                    <div className="header-nav">
                        <nav className="nav-menu">
                            <Link
                                to="blog"
                                offset={-40}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav-link"
                            >
                                Blog
                            </Link>
                            <Link
                                to="guide"
                                offset={10}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav-link"
                            >
                                Guide
                            </Link>
                            <Link
                                to="Realty"
                                offset={20}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav-link"
                            >
                                Realty
                            </Link>

                            <Link
                                to="about"
                                offset={-80}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav-link"
                            >
                                About
                            </Link>

                            <Link
                                to="contact"
                                offset={-80}
                                spy={true}
                                smooth={true}
                                duration={700}
                                className="nav-link"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default TopNav;
