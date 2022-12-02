import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "../carousel-item";
import styles from './carousel.module.css';
import { RankingsProductList } from "../../pages/main/types";

interface Props {
  list: RankingsProductList[] | undefined
}

export default class Carousel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.list?.length! < 4 ? this.props.list?.length : 4,
      slidesToScroll: this.props.list?.length! < 4 ? this.props.list?.length : 4
    };
    
    return (
      <div className={styles.carousel}>
        <Slider {...settings}>
          {this.props.list?.map((item, i) => {
            return <div><CarouselItem item={item} /></div>
          })}       
        </Slider>
      </div>
    );
  }
}