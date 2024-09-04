import React, {FC} from 'react';
import styles from "./Logo.module.scss"
import Link from "next/link";
type logoProps = {
    title: string
}
const Logo:FC<logoProps> = ({title}) => {
    return (
        <Link href={"/"} className={styles["logo"]}>
            <h2 className={`${styles["logo__title"]}`}> {`{ 0206 }`} </h2>
            <p className={styles["logo__text"]}>{title} </p>
        </Link>
    );
};

export default Logo;