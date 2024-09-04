import { IconType } from "react-icons";

interface IconProps {
    IconTitle: IconType;
    className?:string,
    onClick?: () => void;
}

const Icon = ({ IconTitle ,className,onClick}: IconProps) => {
    return <IconTitle className={className} onClick={onClick} />;
};

export default Icon;