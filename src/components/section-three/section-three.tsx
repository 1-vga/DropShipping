import React from "react";
import { Root } from "../../pages/main/types";
import { Button } from "../button";
import { Product } from "../product";
import { Review } from "../review";
import styles from './section-three.module.css';

interface Props {
    data: Root | null
}

const SectionThree: React.FC<Props> = ({ data }) => {
    return (
        <section className={styles.sectionThree}>
            <div className={styles.buttonWrapper}>
                <a href={data?.product_purchase_link} target="_blank">
                    <Button />
                </a>
            </div>
            <h1 className={styles.title}>Neutral Reviews</h1>
            {data?.neutral_review_list.map((review) => {
                return <Review
                    text={review.review_text}
                    star_count={review.star_count}
                    bold_index={review.bold_index || []}
                />
            })}
            <h2 className={styles.title2}>Related Products</h2>
            <div className={styles.products}>
                {
                    data?.related_product_list.map((product, i) => {
                        return <Product key={i} product={product} />
                    })
                }
            </div>
        </section>
    );
};

export default SectionThree;
