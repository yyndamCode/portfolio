"use client";
import React from "react";
import useTheme from "@/hooks/useTheme"; // Custom hook for theme management
import styles from "./DarkModeBtn.module.scss";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Icon from "@/component/Icon/Icon";

const DarkModeBtn: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className={styles["dark-mode-wrapper"]}>
            <input
                type="checkbox"
                className={styles["checkbox"]}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                id="dark-mode-toggle"
            />
            <label htmlFor="dark-mode-toggle" className={styles["switch"]}>
                <Icon IconTitle={IoMoonOutline} className={styles["icon-moon"]}/>
                <Icon IconTitle={IoSunnyOutline} className={styles["icon-sun"]}/>
                <div className={styles["ball"]}></div>
            </label>
        </div>
    );
};

export default DarkModeBtn;