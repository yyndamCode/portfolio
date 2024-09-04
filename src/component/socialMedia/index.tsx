import React from 'react';
import styles from "./socialMedia.module.scss"
import MediaLink from "@/component/MediaLink/MediaLink";
import { PiGithubLogoFill } from "react-icons/pi";
import {FaTwitter} from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialMedia = () => {
    return (
        <div className={styles['socialMedia']}>
            <MediaLink size="small" mediaHref="https://github.com">
                <PiGithubLogoFill/>
            </MediaLink>
            <MediaLink size="small" mediaHref="/">
                <FaTwitter/>
            </MediaLink>
            <MediaLink size="small" mediaHref="/">
            <TiSocialLinkedin/>
            </MediaLink>
        </div>
    );
};

export default SocialMedia;