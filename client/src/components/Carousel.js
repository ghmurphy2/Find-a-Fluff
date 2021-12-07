import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../logo.svg";

import "../App.css";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto">
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src={logo}
          alt="First slide"
          id="carouselImg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="https://images.dog.ceo/breeds/collie-border/n02106166_1854.jpg"
          alt="First slide"
          id="carouselImg"
        />
        <Carousel.Caption id="caption">
          <p>SEARCH BREEDS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carouselImg"
          className="d-block w-100 mx-auto"
          src="https://images.dog.ceo/breeds/collie-border/n02106166_2419.jpg"
          alt="Second slide"
        />

        <Carousel.Caption id="caption">
          <p>SAVE FAVORITES</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="carouselImg"
          className="d-block w-100 mx-auto"
          src="https://images.dog.ceo/breeds/hound-blood/n02088466_7002.jpg"
          alt="Third slide"
        />

        <Carousel.Caption id="caption">
          <p>FIND ADOPTIONS</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
