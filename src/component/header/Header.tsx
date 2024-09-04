import React from 'react';
import styles from "./header.module.scss"
import Logo from "@/component/logo/Logo";
import Navbar from "@/component/navbar/Navbar";
import SocialMedia from "@/component/socialMedia";
import {navData} from "@/data/navData";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <Logo title="yyndam.AY"/>
            <div className={styles['header__group']}>
                <Navbar navItems={navData}/>
                <SocialMedia/>
            </div>
        </header>
    );
};

export default Header;