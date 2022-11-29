import React from "react";
import { Button } from "../button";
import { Carousel } from "../carousel";
import { Review } from "../review";
import { StarRating } from "../star-rating";
import styles from './section-one.module.css';

interface Props {
}

const SectionOne: React.FC<Props> = (props) => {
    return (
        <section className={styles.sectionOne}>
            <div className={styles.productDisplay}>
                <div className={styles.productRank}>
                    #1
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://m.media-amazon.com/images/I/91RmQzKenOL._AC_SX679_.jpg" alt="product" />
                </div>
            </div>
            <div className={styles.textContent}>
                <div className={styles.descriptionTop}>
                    <h1 className={styles.productTitle}>
                        HotHand HAND05 Warmers (8 Pair)
                    </h1>
                    <div className={styles.productSpecifications}>
                        <div className={styles.ratingContainer}>
                            <div className={styles.starCount}>
                                <StarRating rating={5} />
                            </div>
                            <div className={styles.arrow}>&#8735;</div>
                            <div className={styles.reviewCount}>40,504</div>
                        </div>
                        <div className={styles.priceContainer}>
                            <div className={styles.productPrice}>
                                25
                                <span className={styles.currency}>$</span>
                                <span className={styles.priceDecimal}>60</span>
                            </div>
                            <div className={styles.productExclusionPrice}>$27.49</div>
                        </div>
                    </div>
                </div>
                <div className={styles.keywordsContainer}>
                    <div className={styles.keyword}>Long Lasting</div>
                    <div className={styles.keyword}>Natural</div>
                    <div className={styles.keyword}>Odorless</div>
                </div>
            </div>
            <Review
                text="Took these camping and it got to 26 degrees at night.
                These were a life saver for sure. Easy to use and
                worked for hours"
                count="3/5"
            />
            <div className={styles.buttonWrapper}>
                <Button />
            </div>
            <Carousel />
            <ul className={styles.productDescription}>
                <li className={styles.descriptionText}>
                    <strong>MULTIPURPOSE WARMERS</strong> -
                    Single use airactivated heat packs that provide everyday warmth
                    and are ideal for keeping your body warm when
                    the temperature gets cold. They’re available in
                    several styles designed for your hands, feet, and
                    body
                </li>
                <li className={styles.descriptionText}>
                    <strong>WHEN TO USE:</strong> Tailgating at Events, Outdoor
                    Sporting Events, Hunting & Fishing, Camping &
                    Hiking, Working in The Yard, Jogging or Taking
                    Your Pet for A Walk. Convenient, Compact,
                    Portable.
                </li>
            </ul>
        </section>
    );
};

export default SectionOne;
