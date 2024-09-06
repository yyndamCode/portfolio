// components/layout/MainLayout.tsx
"use client";
import React, { ReactNode } from 'react';
import styles from './MainLayout.module.scss';
import useTheme from '../../hooks/useTheme'; // Custom hook to manage theme

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const { isDarkMode } = useTheme();

    return (
        <main className={`${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <div className={styles.container}>{children}</div>
        </main>
    );
};

export default MainLayout;
