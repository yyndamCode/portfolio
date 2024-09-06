import React from 'react';
import styles from "./contact.module.scss"
import SectionContent from "@/component/SectionContent/SectionContent";
import ContactInfo from "@/component/ContactInfo/ContactInfo";
import {navData} from "@/data/navData";
import Input from "@/component/inputs/input";
import ContactForm from "@/component/ContactForm/ContactForm";

const Page: React.FC = () => {
    return (
        <main>
            <section className={styles.contact}>
                <ContactForm/>
                <ContactInfo title="Let's for talk Something special"
                             description="I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences. "
                             email="yagageldiyew@gmail.com"
                             phoneNumber="+99363680888"/>
            </section>
        </main>
    );
};

export default Page;