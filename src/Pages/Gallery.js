import React from 'react'
import react from '../Assets/react.png'
import angular from '../Assets/angular.png'
import express from '../Assets/express.png'
import mongo from '../Assets/mongo.png'
import vuejs from '../Assets/vue.png'
import jquerry from '../Assets/jquerry.png'

const Gallery = () => {
  return (
    <div className='container'>
      <div className='row mt-3 mb-5'>
        
        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={react} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">REACT</a>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={angular} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">ANGULAR</a>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={express} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">EXPRESS</a>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={react} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">REACT</a>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={angular} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className="card" style={{ width: '18rem' }}>
            <img src={express} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Gallery