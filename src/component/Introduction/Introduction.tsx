import  styles from "./Introduction.module.scss"
import { Poppins } from 'next/font/google';
import React from "react";
import useMobileView from "@/hooks/useMobile";
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Introduction:React.FC = () => {
    const mobile = useMobileView();
    return (
        <article className={`${styles["introduction"]} ${poppins.variable}` }>
            {
                !mobile ?
                    <>
                        <h1 className={styles["introduction__title"]}>
                Hi 👋,
            </h1>
                        <h2 className={styles["introduction__title"]}>
                My name is
            </h2>
                        <h3 className={styles["introduction__title"]}>
                Yhlas
            </h3>
                        <p className={styles["introduction__title"]}>
                I build things for the web.
            </p>
                    </> :
                    <h1 className={styles["introduction__sub-title"]}>
                        Hi 👋,
                        My name is
                        Yhlas
                        I build things for the web.
                    </h1>
            }
        </article>
    );
};

export default Introduction;