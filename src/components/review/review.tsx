import React from "react";
import styles from './review.module.css';

interface Props {
    text: string;
    count: string | null; 
}

const Review: React.FC<Props> = ({text, count}) => {


    return (
        <div className={styles.review}>
            <p className={styles.text}>
                <span>{text}</span>
            </p>
            {count && <div className={styles.count}>{count}</div>}
        </div>
    );
};

export default Review;
