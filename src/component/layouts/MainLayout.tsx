import React from 'react';
import styles from "./MainLayout.module.scss"
const MainLayout: React.FC = ({
                                  children,
                              }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className={styles["container"]}>
            {children}
        </div>
    );
};

export default MainLayout;