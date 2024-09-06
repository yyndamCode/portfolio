"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import styles from "./goToButton.module.scss"; // SCSS dosyasını içe aktarıyoruz

function GoToBtn() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={styles["go-to-btn"]}>
            <button
                onClick={handleScrollToTop}
                className={styles["go-to-btn__button"]}
            >
                <FaArrowUp />
            </button>
        </div>
    );
}

export default GoToBtn;
