import React from "react";
import styles from './footer.module.css';

interface Props {
}

const Footer: React.FC<Props> = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.textTop}>Contact us:</div>
            <div className={styles.textBottom}>product@google.com</div>
        </footer>
    );
};

export default Footer;