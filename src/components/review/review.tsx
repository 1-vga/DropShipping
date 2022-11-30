import React, { useMemo } from "react";
import { makeBold } from "../../utils";
import styles from './review.module.css';
import ReactHtmlParser from 'react-html-parser';

interface Props {
    text: string;
    count: string | null;
}

const Review: React.FC<Props> = ({ text, count }) => {

    const boldedText = useMemo(() => {
        return makeBold(text, [
            [0,2],
            [1,3],
            [5,6]
            ])
    }, [])
    return (
        <div className={styles.review}>
            <p className={styles.text}>
                <span>
                    {
                    ReactHtmlParser(boldedText)
                }
                </span>
            </p>
            {count && <div className={styles.count}>{count}</div>}
        </div>
    );
};

export default Review;
