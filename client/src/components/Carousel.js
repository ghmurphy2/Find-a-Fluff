import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import  testA  from '../assets/testA.jpg'
import testB from '../assets/testB.jpeg'
import testC from '../assets/testC.jpeg'

import '../App.css';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto">
        <Carousel.Item >
            <img
            className="d-block w-50 mx-auto"
            src={testA}
            alt="First slide"
            id="carouselImg"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <img
            id="carouselImg"
            className="d-block w-50 mx-auto"
            src={testB}
            alt="Second slide"
            />
    
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
            <img
            id="carouselImg"
            className="d-block w-50 mx-auto"
            src={testC}
            alt="Third slide"
            />
    
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
} 

export default ControlledCarousel;