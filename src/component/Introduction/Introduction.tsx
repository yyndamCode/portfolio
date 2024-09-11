import  styles from "./Introduction.module.scss"
import { Poppins } from 'next/font/google';
import React from "react";
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Introduction:React.FC = () => {

    return (
        <article className={`${styles["introduction"]} ${poppins.variable}` }>
            <h1 className="introduction__title">
                Hi 👋,
            </h1>
            <h2 className="introduction__subtitle">
                My name is
            </h2>
            <h3 className="introduction__name">
                Yhlas
            </h3>
            <p className="introduction__description">
                I build things for the web.
            </p>
        </article>
    );
};

export default Introduction;