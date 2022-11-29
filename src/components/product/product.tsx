import React from "react";
import styles from './product.module.css';
import productIcon from './product_icon.png';
import logo from './prime.png'
import { StarRating } from "../star-rating";

interface Props {
}

const Product: React.FC<Props> = (props) => {

    return (
        <div className={styles.product}>
            <div className={styles.display}>
                <img src={productIcon} alt="product_img" />
            </div>
            <div className={styles.description}>
                <div className={styles.descriptionTop}>
                    <div><StarRating rating={3.5} /></div>
                    <div className={styles.review}>19</div>
                </div>
                <div className={styles.descriptionBottom}>
                    <div className={styles.price}>$87.99</div>
                    <div className={styles.logo}>
                        <img src={logo} alt="company" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
