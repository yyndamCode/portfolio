'use client'
import styles from "./inputs.module.scss"
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

type InputProps = {
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
}
const Input: React.FC<InputProps> = ({
                                         id,
                                         type,
                                         placeholder,
                                         register,
                                         required,
                                         errors
                                     }) => {


    return (
        <input
            // className={`${errors[id] ? "incorrect" : "correct"} `}
            className={`${styles.input} ${styles[`input__${type}`]}`}
            type={type}
            {...register(id,{required})}
            placeholder={placeholder}
            id={id}
        />
    );
};

export default Input;
