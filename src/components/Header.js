import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Header.css';
import Scroll from 'react-scroll';

class Header extends Component {
  render() {
    let Link = Scroll.Link;
    return (
      <div className="header-container">
        <div className="header">
          <Fade bottom>
            <h2 className="site-title">Churchill Meadows Life</h2>
          </Fade>
          <Fade left>
            <h1 className="site-description">
              See what the community has to offer!
            </h1>
          </Fade>
          <Fade left>
            <div className="header-links">
              <a href="mailto:daniel.forte@live.com">
                <i className="icon fa fa-envelope" />
              </a>
              <a href="https://cloudrealty.ca/our-agent/daniel-forte">
                <i className="icon fa fa-home" aria-hidden="true" />
              </a>
              <a href="https://www.facebook.com/">
                <i className="icon fa fa-facebook" aria-hidden="true" />
              </a>
            </div>
          </Fade>
        </div>
        <div className="arrow-wrapper">
          <Fade bottom>
            <Link
              to="about"
              offset={-40}
              spy={true}
              smooth={true}
              duration={700}
            >
              <i
                className="fa fa-chevron-down smooth-container"
                aria-hidden="true"
              />
            </Link>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Header;
