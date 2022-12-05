import React from "react";
import styles from './product.module.css';
import productIcon from './product_icon.png';
import logo from './prime.png'
import { StarRating } from "../star-rating";
import { RelatedProductList } from "../../pages/main/types";

interface Props {
    product: RelatedProductList
}

const Product: React.FC<Props> = ({ product }) => {
    return (

        <div className={styles.product}>
            <a href={product.product_purchase_link} target='_blank'>
                <div className={styles.display}>
                    <img src={product.product_image_url} alt="product_img" />
                </div>
                <div className={styles.description}>
                    <div className={styles.descriptionTop}>
                        <div className={styles.rating}><StarRating rating={product.star_count} /></div>
                        <div className={styles.review}>{product.review_count}</div>
                    </div>
                    <div className={styles.descriptionBottom}>
                        <div className={styles.price}>{product.product_price}</div>
                        {product.is_prime && <div className={styles.logo}>
                            <img src={logo} alt="company" />
                        </div>
                        }
                    </div>
                </div>
            </a>
        </div>

    );
};

export default Product;
