import React from "react";
import { RankingsProductList } from "../../pages/main/types";
import styles from './carousel-item.module.css';

interface Props {
    item: RankingsProductList
}

const CarouselItem: React.FC<Props> = ({ item }) => {


    return (
        <div className={styles.carouselItem}>
            <div className={styles.content}>
                <img src={item.product_image_url} alt="item-icon" />
                <div className={styles.rank}>#{item.product_rank}</div>
            </div>
        </div>
    );
};

export default CarouselItem;
