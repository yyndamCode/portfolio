import React from 'react';
import styles from "./SkillItems.module.scss"
import Icon from "@/component/ui/Icon/Icon";
import {IconType} from "react-icons";

interface SkillItemProps {
    name: string;
    icon: IconType;
}

const SkillItems: React.FC<SkillItemProps> = ({ name, icon}) => {

    const skillClass = `${styles["skill-item"]} ${styles[`skill-item--${name.toLowerCase()}`]}`;

    return (
        <div className={skillClass} >
            {/*<div className={styles["hover_color_bubble"]}></div>*/}
            <Icon IconTitle={icon} className={styles["skill-item__icon"]}/>
            <h2 className={styles["skill-item__name"]}>{name}</h2>
        </div>
    );
};

export default SkillItems;