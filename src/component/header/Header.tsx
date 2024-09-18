"use client"
import React, {useState,useEffect} from 'react';
import styles from "./header.module.scss"
import Logo from "@/component/ui/logo/Logo";
import Navbar from "@/component/ui/navbar/navbar";
import SocialMedia from "@/component/socialMedia";
import {navData} from "@/data/navData";
import DarkModeBtn from "@/component/DarkMode/darkModeBtn";
import useMobileView from "@/hooks/useMobile";
import Button from "@/component/ui/Button/Button";
import {IoCloseOutline, IoMenuOutline} from "react-icons/io5";
import useTheme from "@/hooks/useTheme";
import MainLayout from "@/component/layouts/MainLayout";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode } = useTheme();
    const isMobile = useMobileView();


    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false);
        }
    }, [isMobile]);


    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <header className={styles["header"]}>
            <Logo title="yyndam.AY"/>
            <div className={`${styles["header__group"]} ${ isMenuOpen && styles["header__group--active"]}`}>
                <Navbar navItems={navData}  isMenuOpen={isMenuOpen} isDarkMode={isDarkMode} />
                <SocialMedia />
                <DarkModeBtn />
          </div>
                 {isMobile &&
                    <Button size="medium" onClick={toggleMenu}>
                        { isMenuOpen ? <IoCloseOutline/> : <IoMenuOutline /> }
                     </Button>
                 }
        </header>
    );
};

export default Header;