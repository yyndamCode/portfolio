
import { FC } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

type Navbar = {
    title: string;
    href: string;
};

type NavBarProps = {
    navItems: Navbar[];
    isMenuOpen?: boolean;
    isDarkMode?: boolean;
};

const NavBar: FC<NavBarProps> = ({navItems, isMenuOpen, isDarkMode}) => {

    // ${isMenuOpen ? styles["navbar--active"]: styles["navbar--inactive"]}
    return (
        <nav className={`${styles.navbar} ${isMenuOpen && styles["navbar--active"]}`}>
            {navItems.map((items, index) => (
                <Link
                    key={index}
                    href={items.href}
                    className={`${styles["navbar__items"]} ${ isMenuOpen  && styles["navbar__items--dark"]}`}
                >
                    {items.title}
                </Link>
            ))}
        </nav>
    );
};

export default NavBar;
