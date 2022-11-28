import React from "react";
import { SectionOne } from "../../components/section-one";
import { SectionTwo } from "../../components/section-two";
import styles from './main.module.css';

interface Props {
}

const Main: React.FC<Props> = (props) => {


    return (
        <div className={styles.main}>
            <SectionOne />
            <SectionTwo />
        </div>
    );
};

export default Main;
