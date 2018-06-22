import React, { Component } from 'react';
import '../componentStyles/App.css';
import ParticlesBackground from './Particles';
import Header from './Header';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <section className="App">
        <NavBar />
        <section className="landing-background">
          <ParticlesBackground />
          <Header />
        </section>
      </section>
    );
  }
}

export default App;
