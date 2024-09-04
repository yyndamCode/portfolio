import React from 'react';
import styles from "./Footer.module.scss"
import Logo from "@/component/logo/Logo";
import SocialMedia from "@/component/socialMedia";
import Navbar from "@/component/navbar/Navbar";
import {navData} from "@/data/navData";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__top"]}>
                <Logo title="yyndam.AY"/>
                <div className={styles['footer__group']}>
                    <SocialMedia/>
                </div>
                    </div>
            <div className={styles['footer__bottom']}>
                <Navbar navItems={navData}/>
                <p className={styles["footer__sub-title"]}>Designed and built by <span>yyndam.AY</span> with Love & Coffee</p>
            </div>
        </footer>
);
};

export default Footer;