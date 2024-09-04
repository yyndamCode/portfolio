import Image from "next/image";
import styles from "./ProfilePicture.module.scss";


interface ProfilePictureProps {
    src?: any | string; // Accept either a StaticImageData object or a string
    alt: string; // Alternative text for the image
    size?: string; // Optional size for the image
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src , alt, }) => {
    return (
        <div className={styles["profile-picture"]} >
            <Image
                src={src}
                alt={alt}
                width={332}
                height={332}
                priority={true}
                className={styles["profile-picture__image"]}
            />
        </div>
    );
};

export default ProfilePicture;