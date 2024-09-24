"use client"

import React from 'react';
import styles from "./Footer.module.scss"
import Logo from "@/component/ui/logo/Logo";
import SocialMedia from "@/component/socialMedia";
import Navbar from "@/component/ui/navbar/navbar";
import {navData} from "@/data/navData";
import Link from "next/link";
import useMobileView from "@/hooks/useMobile";
const Footer = () => {
    const isMobile = useMobileView();
    return (
        <footer className={styles.footer}>
            <div className={styles["footer__top"]}>
                <Logo title="yyndam.AY"/>
                <div className={styles['footer__group']}>
                  <Link href="/" className={styles["footer__link"]}>+99363680888</Link>
                  <Link href="https://mail.google.com" className={styles["footer__link"]}>yagageldiyew@gmail.com</Link>
                    {!isMobile && <SocialMedia/>}
                </div>
                    </div>
            <div className={styles['footer__bottom']}>
                {!isMobile &&    <Navbar navItems={navData} />}
                <p className={styles["footer__sub-title"]}>Designed and built by <span>yyndam.AY</span> with Love & Coffee</p>
            </div>

        </footer>
);
};

export default Footer;