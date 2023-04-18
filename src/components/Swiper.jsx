import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



export const Swiper = () => {
  return (
    <Carousel fade>

    <Carousel.Item>
          <img width={420} height={800}
              className="d-block w-100"
              src="./img/1.jpeg"
              alt="First slide" />
          <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link exact to={'/Form'}>
              <Button variant="secondary">Обратная связь</Button>
              </Link>
          </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
              <img width={420} height={800}
                  className="d-block w-100"
                  src="./img/2.jpg"
                  alt="Second slide" />

              <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item><Carousel.Item>
              <img width={420} height={800}
                  className="d-block w-100"
                  src="./img/3.jpg"
                  alt="Third slide" />

              <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
  )
}

export default Swiper;