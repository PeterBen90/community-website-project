import React, { Component } from 'react';
import '../componentStyles/App.css';
import ParticlesBackground from './Particles';
import Header from './Header';
// import NavBar from './NavBar';
// import NavHeader from './NavHeader';
import TopNav from './TopNav';

class App extends Component {
  render() {
    return (
      <section className="App">
        <TopNav />
        <section className="landing-background">
          <ParticlesBackground />
          <Header />
        </section>
      </section>
    );
  }
}

export default App;
