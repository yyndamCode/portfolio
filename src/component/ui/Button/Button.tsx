import React from 'react';
import styles from "./Button.module.scss"

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void; // Corrected the typing for the onClick prop
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;