import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carrousel.css';

// Imágenes locales
import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';

const Carrousel = () => {
  return (
    <div className="contenedor-carrusel">
      <Carousel interval={4000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carrusel-img"
            src={img1}
            alt="Imagen 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carrusel-img"
            src={img2}
            alt="Imagen 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carrusel-img"
            src={img3}
            alt="Imagen 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel;
