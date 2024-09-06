'use client'
import styles from "./inputs.module.scss"
import {FieldErrors, UseFormRegister} from "react-hook-form";
import {FormInputs} from "@/types/FormInputs";

type InputProps = {
    id: keyof FormInputs;  // id burada da FormInputs anahtarlarına sınırlı
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FormInputs>;
    errors: FieldErrors;
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
            className={`${styles.input} ${styles[`input__${type}`]} ${errors[id] && styles[`input__incorrect`]}`}
            type={type}
            {...register(id,{ required: required })}
            placeholder={placeholder}
            id={id}
        />
    );
};

export default Input;
