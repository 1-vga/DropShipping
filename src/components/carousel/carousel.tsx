import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "../carousel-item";
import styles from './carousel.module.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className={styles.carousel}>
        <Slider {...settings}>
          <div>
            <CarouselItem rank="#1" />
          </div>
          <div>
            <CarouselItem rank="#2" />
          </div>
          <div>
            <CarouselItem rank="#3" />
          </div>
          <div>
            <CarouselItem rank="#4" />
          </div>
          <div>
            <CarouselItem rank="#5" />
          </div>
          <div>
            <CarouselItem rank="#6" />
          </div>
        </Slider>
      </div>
    );
  }
}