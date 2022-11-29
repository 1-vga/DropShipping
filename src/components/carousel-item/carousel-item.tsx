import React from "react";
import styles from './carousel-item.module.css';
import itemIcon from './itemImg.png';

interface Props {
    rank: string
}

const CarouselItem: React.FC<Props> = ({ rank }) => {


    return (
        <div className={styles.carouselItem}>
            <div className={styles.content}>
                <img src={itemIcon} alt="item-icon" />
                <div className={styles.rank}>{rank}</div>
            </div>
        </div>
    );
};

export default CarouselItem;
