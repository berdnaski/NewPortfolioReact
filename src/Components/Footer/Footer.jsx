import React from 'react'
import { FaLinkedin, FaGithub, FaRegEnvelope, FaInstagram } from 'react-icons/fa';

function Footer () {
    return (
        
        <div className="container col-6 col-md-2 d-flex justify-content-around">
          <a className='icons' href='https://www.linkedin.com/in/erick-berdnaski' target="_blank"><FaLinkedin /></a>
          <a className='icons' href='https://www.instagram.com/berd.erick/' target="_blank"><FaInstagram /></a>
          <a className='icons' href='https://www.github.com/berdnaski' target="_blank"><FaGithub /></a>
          <a className='icons' href='mailto:berdnaski1177@gmail.com' target="_blank"><FaRegEnvelope /></a>
        </div>
    )
}

export default Footer