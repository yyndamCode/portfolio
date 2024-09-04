import React from 'react';
import styles from './SectionContent.module.scss';

interface SectionContentProps {
    children: React.ReactNode;
    className?: string;
}

const SectionContent: React.FC<SectionContentProps> = ({
                                                           children,
                                                           className
                                                       }) => {
    return (
        <section className={className}>
            {children}
        </section>
    );
};

export default SectionContent;