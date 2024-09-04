import React from 'react';
import styles from "./MySkills.module.scss"
import SectionContent from "@/component/SectionContent/SectionContent";
import SkillItems from "@/component/SkillItems/SkillItems";
import ContentBlock from "@/component/ContentBlock/ContentBlock";
import {skillsData} from "@/data/skillsData";

const MySkills = () => {
    return (
        <SectionContent className={styles["skills"]}>
            <ContentBlock title="My Teach Stack"
                          text="Technologies I’ve been working on recently"/>
            <div className={styles["skills__box"]}>
                {
                    skillsData.map((skill) =>
                        (
                            <SkillItems key={skill.id} name={skill.name} icon={skill.icon}/>
                        ))
                }

            </div>
        </SectionContent>
    );
};

export default MySkills;

