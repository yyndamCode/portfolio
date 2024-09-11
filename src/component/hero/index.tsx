import styles from "./hero.module.scss"
import React from "react";
import Introduction from "@/component/Introduction/Introduction";
import ProfilePicture from "@/component/ProfilePicture/ProfilePicture";
import profileImage from "../../../public/3QVh7e05Syu6U6hDynUN_g.webp";
const Hero: React.FC = () => {
    return (
        <section className={styles["intro__section"]}>
            <Introduction />
            <ProfilePicture src={profileImage} alt="photo"/>
        </section>
    );
};

export default Hero;