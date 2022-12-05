import React, { useEffect, useRef } from "react";
import styles from './header.module.css';
import search from './search.svg';
import classNames from 'classnames';

interface Props {
    elementInView: boolean
}

const Header: React.FC<Props> = ({ elementInView }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const keyHandler = (event: KeyboardEvent) => {
            event.key === "Enter" && handleSearch();
        }

        inputRef.current?.addEventListener("keypress", keyHandler);
        return () => inputRef.current?.removeEventListener('keypress', keyHandler)
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputRef.current!.value = e.target.value;
    }

    const handleSearch = () => {
        window.location.href = `http://ec2-34-230-59-218.compute-1.amazonaws.com:8080/data/?product_name=${inputRef.current!.value}`;
    }

    return (
        <header id='header' className={classNames({ [styles.active]: elementInView }, styles.header)}>
            <div className={styles.logo}>T</div>
            <div className={styles.searchBox}>
                <input ref={inputRef} className={styles.input} type="text" onChange={handleChange} />
                <div className={styles.iconWrapper} onClick={handleSearch}>
                    <img src={search} alt="search" />
                </div>
            </div>
        </header>
    );
};

export default Header;
