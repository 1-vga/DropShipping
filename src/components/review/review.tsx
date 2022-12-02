import React, { useMemo } from "react";
import { makeBold } from "../../utils";
import styles from './review.module.css';
import ReactHtmlParser from 'react-html-parser';

interface Props {
    text: string | undefined;
    star_count?: number;
    bold_index: number[][];
}

const Review: React.FC<Props> = ({ text, bold_index, star_count }) => {
    const boldedText = useMemo(() => {
        return makeBold(text!, bold_index) as string
    }, [text, bold_index])
    return (
        <div className={styles.review}>
            <p className={styles.text}>
                <span>
                    {
                        ReactHtmlParser(boldedText)
                    }
                </span>
            </p>
            {star_count && <div className={styles.count}>{star_count}</div>}
        </div>
    );
};

export default Review;
