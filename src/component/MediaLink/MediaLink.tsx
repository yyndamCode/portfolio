import styles from "./MediaLink.module.scss";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    mediaHref: string,
    size: "small" | "medium" | "large";
}

const MediaLink: React.FC<ButtonProps> = ({
                                              children,
                                              mediaHref,
                                              size
                                          }) => {
    return (
        <Link
            className={` ${styles.mediaLink} ${styles[`mediaLink--${size}`]}`}
            href={mediaHref}
        >
            {children}
        </Link>
    );
};

export default MediaLink;