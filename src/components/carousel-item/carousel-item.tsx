import classNames from "classnames";
import React from "react";
import { RankingsProductList } from "../../pages/main/types";
import styles from './carousel-item.module.css';

interface Props {
    item: RankingsProductList,
    length: number
}

const CarouselItem: React.FC<Props> = ({ item, length }) => {

    return (
        <div className={classNames(styles.carouselItem,
            { [styles.one]: length === 1 },
            { [styles.two]: length === 2 },
            { [styles.three]: length === 3 },
            { [styles.many]: length > 3 }
        )}>
            <div className={styles.content}>
                <img src={item.product_image_url} alt="item-icon" />
                <div className={styles.rank}>#{item.product_rank}</div>
            </div>
        </div>
    );
};

export default CarouselItem;
