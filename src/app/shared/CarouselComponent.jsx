import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = ({ images }) => {
  return (
    <Carousel indicators={false}>
      {images &&
        images.map((image, key) => (
          <Carousel.Item key={key}>
            <img className="d-block w-100" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default CarouselComponent;
