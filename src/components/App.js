import React, { Component } from 'react';
import '../componentStyles/App.css';
import ParticlesBackground from './Particles';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <section className="App">
        <section className="landing-background">
          <ParticlesBackground />
          <Header />
        </section>
      </section>
    );
  }
}

export default App;
