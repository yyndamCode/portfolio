import React from 'react';
import styles from "./ContactInfo.module.scss"
import Link from "next/link";

interface ContactInfoProps {
    title: string,
    description: string,
    email: string,
    phoneNumber: string,
}


const ContactInfo: React.FC<ContactInfoProps> = ({title, description, email, phoneNumber,}) => {
    return (
        <div className={styles["contact-info"]}>

            <h1 className={styles["contact-info__title"]}>{title}</h1>
            <p className={styles["contact-info__description"]}>{description}</p>

            <div className={styles["contact-info__details"]}>
            <Link href={"/"} className={styles["contact-info__link"]}>{email}</Link>
            <Link href={"/"} className={styles["contact-info__link"]}>{phoneNumber}</Link>
            </div>
        </div>
    );
};

export default ContactInfo;