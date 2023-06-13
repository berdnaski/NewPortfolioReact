import React from 'react'
import Typical from 'react-typical'

function Steps() {
    return (
      <div class="container">
        <p className="jumbotron-heading title-left" id='p-nome'>
  Oi, sou Erick Silveira Berdnaski {' '}
  <Typical
    loop={Infinity}
    steps={[
      'Desenvolvedor',
      2000, 
      'Front End',
      1500,
      'React',
      3000 
    ]}
  />
</p>
</div>
    )
}

export default Steps