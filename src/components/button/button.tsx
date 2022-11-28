import React from "react";
import styles from './button.module.css';
import logo from './logo.svg';

interface Props {
}

const Button: React.FC<Props> = (props) => {

    return (
        <button className={styles.button}>
            <div className={styles.text}>Buy on</div>
            <div className={styles.imgWrapper}>
                <img src={logo} alt="amazon-logo" />
            </div>
        </button>
    );
};

export default Button;
