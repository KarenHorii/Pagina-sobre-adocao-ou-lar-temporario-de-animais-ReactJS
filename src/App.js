import React from 'react';
import './App.css';
import './Page-landing.css'
import './Animations.css'
import logo from './img/logo.png'

function App() {
  return (
    <div id="page-landing">
        <div id="container">
          <header>
          <img src={logo}
          className="animate-up"
          id="logo" 
          alt="Logo"
            />

          </header>
  
          <main>
            <h1 className="animate-up">Ajude um animalzinho!</h1>
  
            <section className="visit">
              <p className="animate-up">Com um pet fofura e alegria serão infinitas! Mas não esquecendo que significa também ser cuidadoso e paciente.</p>

              <div className="btn">
              <a href='#' className="animate-up">
                Adotar ou lar temporário
              </a>
              <a href='#' className="animate-up">Conheça nossos bichinhos
              </a>
            </div>
            </section>
          </main>
        </div>
        
      </div>
  );
}

export default App;
