import React from 'react'

function Nav () {
    return (
        <nav className='navbar navbar-expand-md navbar-light fixed-top' style={{ backgroundColor: '#e2e2e2' }}>

        <a className='navbar-brand' href='#'><i className="fas fa-user-alt"></i>&nbsp;Berdnaski</a>

        <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarMainToggler"
          aria-controls='navbarMainToggler' aria-expanded="false" aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <section className='collapse navbar-collapse' id='navbarMainToggler'>
          <div className='navbar-nav ml-auto pr-2'>
            <a className='nav-item nav-link' href="#">Inicio</a>
            <a className='nav-item nav-link' href="https://github.com/berdnaski" target='_blank'>Projetos</a>
            <a className='nav-item nav-link' href="#Contato">Contato</a>
          </div>
        </section>
      </nav>
    )
}

export default Nav
