import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Footer from './components/Footer'

function App() {

  return (
    <main className='container' style={{
      background: 'linear-gradient(#1b2024cc, #1b20241f),url(/img/index.jpeg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* header */}
      <header className='cabezal'>
        <div className='logo'>
          <a href=" "> <img src="/img/logo.png" alt="" style={{
            width: '328px',
            height: '70px'
          }}></img>
          </a>
        </div>
        <section className='text-h'>
            <h2>Psicoterapia Individual</h2>
            <p> No hay salud, sin salud mental.</p>
        </section>
        {/*  */}
        <section className="header-inicio">
          <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="rgba(255, 255, 255, 0.589)" fillOpacity="1"
                d="M0,64L60,74.7C120,85,240,107,360,122.7C480,139,600,149,720,138.7C840,128,960,96,1080,101.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className='inic-h'>
            <h1>Maricel Sovran</h1>
            <span>Licenciada en Piscología</span>
          </div>
        </section>
      </header>
      {/*  */}
      <div className="contenido">
        {/* inicio */}
        <section className="ini-resent">
          {/* nav */}
          <div className="nav-i">
            <button className="b-t">Acerca de mi</button>
            <button className="b-t">Servicios</button>
            <button className="b-t">Ubicacion</button>
          </div>
        </section>
      </div>
      {/* footer */}
      <Footer />
    </main>   

  )
}

export default App
