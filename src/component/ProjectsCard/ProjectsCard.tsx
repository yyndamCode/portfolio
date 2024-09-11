import React from 'react';
import styles from "./ProjectsCard.module.scss"
import Image, {StaticImageData} from "next/image";
import ProjectLinks from "@/component/ProjectLinks/ProjectLinks";
import {truncateText} from "@/utils/helpers";

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string;
    livePreviewUrl: string;
    codeUrl: string;
    id: number;
    image: StaticImageData;// Hem string hem de StaticImageData olabilir
    isDarkMode: boolean;
}

const ProjectsCard: React.FC<ProjectCardProps> = ({
                                                      image,
                                                      title,
                                                      description,
                                                      techStack,
                                                      livePreviewUrl,
                                                      codeUrl,
                                                      isDarkMode
                                                  }) => {
    return (
        <article className={`${styles["projects-card"]} ${isDarkMode && "projects-card__dark-mode"}`}>
            <figure className={styles['projects-card__figure']}>

                <Image
                    src={image}
                    width={680}
                    height={290}
                    alt={title}
                    className={styles['projects-card__img']}
                />

            </figure>
            <div className={styles['projects-card__content']}>
                <h2 className={styles['projects-card__title']}>{title}</h2>
                <p className={styles['projects-card__description']}>{truncateText(description, 100)}</p>
                <p className={styles['projects-card__tech-stack']}>
                    Tech stack: <span
                    className={styles['projects-card__tech-list']}>{truncateText(techStack, 31)}</span>
                </p>
                <ProjectLinks livePreviewUrl={livePreviewUrl} codeUrl={codeUrl}/>
            </div>

        </article>
    );
};

export default ProjectsCard;