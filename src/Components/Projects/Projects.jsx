import React from 'react'
import Logo from '../../assets/calculadora.png'
import Cont from '../../assets/contagem.png'
import Iphone from '../../assets/calculadora_iphone.png'
import Game from '../../assets/jogo_velha.png'
import 'animate.css';

function Project () {
    return (
      
        <div className="album py-5 ">
        <div className="container">
          <h2 className="jumbotron heading text-center titulosPretos" >Principais Projetos</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 box-shadow">
                <img src={Logo} alt="" className='img_card' />
                <div className="card-body">
                  <p className="card-text">Uma calculadora de IMC, que desenvolvi usando as tecnologias:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://calculator-imc-drab.vercel.app" target="_blank"><button type="button" class="btn btn-sm btn-outline-success" className='btn1'>Ver Projeto</button></a>
                      <a href="https://github.com/berdnaski/Calculator-IMC" target="_blank"><button type="button" class="btn btn-sm btn-outline-primary" className='btn2'>Ver Repositorio</button></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4 box-shadow ">
                <img src={Cont} alt="" className='img_card' />
                <div className="card-body">
                  <p className="card-text">Um contador de datas, que desenvolvi usando as tecnologias:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://regressive-counter-zywl-kz1ljmgee-berdnaski.vercel.app" target='_blank'><button type="button" class="btn btn-sm btn-outline-success" className='btn1'>Ver Projeto</button></a>
                      <a href="https://github.com/berdnaski/RegressiveCounter" target='_blank'><button type="button" class="btn btn-sm btn-outline-primary" className='btn2'>Ver Repositorio</button></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" id='area-1'>
              <div className="card mb-4 box-shadow">
                <img src={Iphone} alt="" className='img_card' />
                <div className="card-body">
                  <p className="card-text">Calculadora do iPhone, que desenvolvi usando as tecnologias:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://calculator-a6fl.vercel.app" target='_blank'><button type="button" class="btn btn-sm btn-outline-success" className='btn1'>Ver Projeto</button></a>
                      <a href="https://github.com/berdnaski/Calculator" target='_blank'><button type="button" class="btn btn-sm btn-outline-primary" className='btn2'>Ver Repositorio</button></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" id='area-2'>
              <div className="card mb-4 box-shadow">
                <img src={Game} alt="" className='img_card' />
                <div className="card-body">
                  <p className="card-text">Jogo da Velha, que desenvolvi usando as tecnologias:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href="https://jogo-da-velha-berdnaski.vercel.app" target='_blank'><button type="button" class="btn btn-sm btn-outline-success" className='btn1'>Ver Projeto</button></a>
                      <a href="https://github.com/berdnaski/jogo-da-velha" target='_blank'><button type="button" class="btn btn-sm btn-outline-primary" className='btn2'>Ver Repositorio</button></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
}

export default Project;
