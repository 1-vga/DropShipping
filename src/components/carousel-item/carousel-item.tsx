import classNames from "classnames";
import React from "react";
import { RankingsProductList } from "../../pages/main/types";
import styles from './carousel-item.module.css';
import { StarRating } from "../star-rating";
import logo from './prime.png'

interface Props {
    item: RankingsProductList,
    length: number,
    isRelated?: boolean
}

const CarouselItem: React.FC<Props> = ({ item, length, isRelated }) => {

    return (
        <div className={classNames(styles.carouselItem,
            { [styles.isRelated]: !isRelated },
            { [styles.one]: length === 1 },
            { [styles.two]: length === 2 },
            { [styles.three]: length === 3 },
            { [styles.many]: length > 3 },

        )}>
            <div className={styles.contentTop}>
                <img src={item.product_image_url} alt="item-icon" style={{ width: isRelated ? '' : '100%' }} />
                <div className={styles.rank}>#{item.product_rank}</div>
            </div>
            <div className={styles.description}>
                {isRelated && <h1 className={styles.desctiptionTitle}>{item.product_title}</h1>}
                <div className={styles.descriptionTop}>
                    <div className={styles.rating}><StarRating rating={item.star_count} /></div>
                    <div className={styles.review}>{item.review_count}</div>
                </div>
                <div className={styles.descriptionBottom}>
                    <div className={styles.price}>{item.product_price}</div>
                    {item.is_prime && <div className={styles.logo}>
                        <img src={logo} alt="company" />
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
