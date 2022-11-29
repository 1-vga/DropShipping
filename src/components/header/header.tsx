import React from "react";
import styles from './header.module.css';
import search from './search.svg';
import classNames from 'classnames';

interface Props {
}

const Header: React.FC<Props> = (props) => {


    return (
        <header className={classNames(styles.active, styles.header)}>
            <div className={styles.logo}>T</div>
            <div className={styles.searchBox}>
                <input className={styles.input} type="text" />
                <div className={styles.iconWrapper}>
                    <img src={search} alt="search" />
                </div>
            </div>
        </header>
    );
};

export default Header;
