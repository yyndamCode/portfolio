import React from 'react';
import styles from './ProjectLinks.module.scss';
import {FaLink} from 'react-icons/fa6';
import {IoLogoGithub} from 'react-icons/io';
import Link from "next/link";
import Icon from "@/component/ui/Icon/Icon";

interface ProjectLinksProps {
    livePreviewUrl: string;
    codeUrl: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({livePreviewUrl, codeUrl}) => {
    return (
        <div className={styles['projects-links']}>
            <Link href={livePreviewUrl} className={styles['projects-link']}>
                <Icon IconTitle={FaLink}/>
               <p className={styles["projects-links__title"]}> Live Preview</p>
            </Link>
            <Link href={codeUrl} className={styles['projects-link']}>
                <Icon IconTitle={IoLogoGithub}/>
                <p className={styles["projects-links__title"]}> View Code</p>
            </Link>
        </div>);
};

export default ProjectLinks;