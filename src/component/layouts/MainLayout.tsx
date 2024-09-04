import React, {ReactNode} from 'react';
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode; // Allows any valid React child
}

const MainLayout: React.FC<MainLayoutProps> = ({ children })  => {
    return (
        <div className={styles["container"]}>
            {children}
        </div>
    );
};

export default MainLayout;