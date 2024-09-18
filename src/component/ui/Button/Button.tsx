import React from 'react';
import styles from "./Button.module.scss"

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void; // Corrected the typing for the onClick prop
    size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({children, onClick, size}) => {
    return (
        <button className={`${styles.button} ${styles[`button--${size}`]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;