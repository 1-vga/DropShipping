import React from "react";
import { Button } from "../button";
import { Product } from "../product";
import { Review } from "../review";
import styles from './section-three.module.css';

interface Props {
}

const SectionThree: React.FC<Props> = (props) => {


    return (
        <section className={styles.sectionThree}>
            <div className={styles.buttonWrapper}>
                <Button />
            </div>
            <h1 className={styles.title}>Neutral Reviews</h1>
            <Review
                text="Took these camping and it got to 26 degrees at night.
                These were a life saver for sure. Easy to use and
                worked for hours"
                count="3/5"
            />
            <Review
                text="Took these camping and it got to 26 degrees at night.
                These were a life saver for sure. Easy to use and
                worked for hours"
                count="3/5"
            />
            <Review
                text="Took these camping and it got to 26 degrees at night.
                These were a life saver for sure. Easy to use and
                worked for hours"
                count={null}
            />
            <h2 className={styles.title2}>Related Products</h2>
            <div className={styles.products}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(elem => {
                        return <Product key={elem} />
                    })
                }
            </div>
        </section>
    );
};

export default SectionThree;
