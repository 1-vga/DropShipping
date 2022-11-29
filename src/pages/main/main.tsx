import React from "react";
import { SectionOne } from "../../components/section-one";
import { SectionThree } from "../../components/section-three";
import { SectionTwo } from "../../components/section-two";
import { StarRating } from "../../components/star-rating";
import styles from './main.module.css';

interface Props {
}

const Main: React.FC<Props> = (props) => {
    return (
        <div className={styles.main}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    );
};

export default Main;
