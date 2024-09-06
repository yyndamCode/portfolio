"use client"
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import Input from "@/component/inputs/input";
import styles from "./ContactForm.module.scss"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Textarea from "@/component/Textarea/Textarea";
import Button from "@/component/Button/Button";
import Icon from "@/component/Icon/Icon";
import {FaInstagram} from "react-icons/fa";
import {FaTelegramPlane} from "react-icons/fa";
import MediaLink from "@/component/MediaLink/MediaLink";
import {useContactForm} from "@/hooks/useContactForm";


const ContactForm: React.FC = () => {
    const {validationSchema, defaultValues, onSubmit} = useContactForm()
    type ValidationSchema = z.infer<typeof validationSchema>;

    const {register, handleSubmit,} = useForm<ValidationSchema>({
        defaultValues,
        resolver: zodResolver(validationSchema)
    })
    return (
        <form className={styles.contactForm}>
            <Input id="name" type="text" register={register} required placeholder={"Your name"}/>
            <Input id="email" type="email" register={register} required placeholder={"Email"}/>
            <Textarea id="description" register={register} required placeholder={"How can I help?*"}/>
            <div className={styles["contactForm__social-buttons"]}>
                <Button onClick={handleSubmit(onSubmit)}>Get In Touch</Button>
                <div className={styles["contactForm__social-media"]}>
                    <MediaLink size="medium" mediaHref={"https://www.instagram.com/yhlac__0206"}>
                        <Icon IconTitle={FaInstagram}/>
                    </MediaLink>
                    <MediaLink size="medium" mediaHref={"https://t.me/yyndam777"}>
                        <Icon IconTitle={FaTelegramPlane}/>
                    </MediaLink>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
