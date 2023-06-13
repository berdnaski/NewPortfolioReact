import React from 'react';
import './App.css';
import Project from './Components/Projects/Projects';
import Sobre from './Components/Sobre/Sobre'
import Steps from './Components/Steps/Steps'
import Nav from './Components/Nav/Navbar'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <div className='container-fluid p-0'>

      <Nav />
      <section className="jumbotron text-center" style={{ background: '#e2e2e2' }}>
      <Steps />
      </section>
      <Project />

      <div className="jumbotron" style={{ background: '#e2e2e2' }}>
        <Skills />
      </div>

      <section className="jumbotron text-center p3" style={{ backgroundColor: '#e2e2e2' }}>
       <Sobre />
      </section>
      <footer id='Contato' className='container col-12 pt-2 footer text-light text-center ' style={{ backgroundColor: '#e2e2e2' }}>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
