import React, { useMemo } from "react";
import styles from './header.module.css';
import search from './search.svg';
import classNames from 'classnames';

interface Props {
    elementsInView: boolean[]
}

const Header: React.FC<Props> = ({elementsInView}) => {
    const isActive = useMemo(() => {
        return elementsInView.includes(true);
    }, [elementsInView])

    return (
        <header id='header' className={classNames({[styles.active]: isActive}, styles.header)}>
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
