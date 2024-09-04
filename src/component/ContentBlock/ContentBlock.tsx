import React from 'react';
import styles from './ContentBlock.module.scss';

interface ContentBlockProps {
    title: string;
    text: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, text }) => {
    return (
        <article className={styles['content-block']}>
            <h1 className={styles['content-block__title']}>{title}</h1>
            <p className={styles['content-block__text']}>{text}</p>

        </article>
    );
};

export default ContentBlock;