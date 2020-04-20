import React, { Fragment } from 'react';
import "./styles/style.scss"
import Curso from './Curso';


const App = () => {

  const cursos = [
    {
      title: 'React desde cero',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/3e6a0de6-602b-439c-a90b-346f13c6760f.png',
      price: 1000,
      profesor: 'Beto Quiroga'
    },
    {
      title: 'Desarrollo movil con android',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/603529eb-1e00-40c8-9ac2-02af55f79765.png',
      price: 2500,
      profesor: 'Dimas Lujan'
    },
    {
      title: 'Desarrollo Movil con Flutter',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/7604bdf8-d600-43aa-a7bb-62fc2c3517d7.png',
      price: 700,
      profesor: 'Hans Shumit'
    },
    {
      title: 'Php desde cero',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/a2058c16-73f8-4ea4-ad16-5f9bcbae5147.jpg',
      price: 1000,
      profesor: 'Yessi Days'
    },
    {
      title: 'Programador Java',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/0eab09f3-f0ee-4f6a-9180-8335d57a183b.jpg',
      price: 3000,
      profesor: 'Juan Diaz'
    },
    {
      title: 'JS desde Cero',
      image: 'https://edteam-media.s3.amazonaws.com/specialities/original/99cd73fe-69b0-4cff-94d1-2ff645336cd6.jpg',
      price: 1000,
      profesor: 'Jon Mircha'
    }
  ]

  return (
    <Fragment>
      <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="banner" src="data:image/png;base64,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" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Cursos de Programacion</p>
              <p> tu futuro te esta esperando</p>
              <a href="https://ed.team" className="button">Suscribete</a>
            </div>
          </div>
        </div>
      </div>


      {/* CARDS */}
      <div className="ed-grid m-grid-3">
        {
          cursos.map(c => 
            <Curso 
              title={c.title}   
              image={c.image}
              price={c.price}
              profesor={c.profesor} 
              />)
        }
      </div>
    </Fragment>
  )
}

export default App

