import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselItem } from "../carousel-item";
import styles from './carousel.module.css';
import { RankingsProductList } from "../../pages/main/types";
import classNames from "classnames";
import './overwrite.css';

interface Props {
  list: RankingsProductList[] | undefined,
  isRelated?: boolean
}

export default class Carousel extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
    };

    return (
      <div
        style={{ padding: this.props.list?.length! > 3 ? 0 : '' }}
        className={classNames(styles.carousel,
          { 'isRelated': !this.props.isRelated },
          { 'one': this.props.list?.length === 1 },
          { 'two': this.props.list?.length === 2 },
          { 'three': this.props.list?.length === 3 },
          { 'many': this.props.list?.length! > 3 }
        )}>
        <Slider {...settings}>
          {this.props.list?.map((item, i) => {
            return <a key={i} className={classNames({ [styles.wrap]: this.props.list?.length! > 1 })} href={item.product_purchase_link} target='_blank'>
              <CarouselItem item={item} length={this.props.list?.length || 0} isRelated={this.props.isRelated} />
            </a>
          })}
        </Slider>
      </div>
    );
  }
}