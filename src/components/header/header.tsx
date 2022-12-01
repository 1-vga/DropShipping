import React, { useMemo } from "react";
import styles from './header.module.css';
import search from './search.svg';
import classNames from 'classnames';

interface Props {
    elementInView: boolean
}

const Header: React.FC<Props> = ({elementInView}) => {

    return (
        <header id='header' className={classNames({[styles.active]: elementInView}, styles.header)}>
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
