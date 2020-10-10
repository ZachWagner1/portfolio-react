import React from 'react';
import Header from './components/Header/Header'
import Project from './components/Project/Project'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
