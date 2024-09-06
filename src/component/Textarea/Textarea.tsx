import React from 'react';
import {UseFormRegister,} from 'react-hook-form';
import styles from './Textarea.module.scss';
import {FormInputs} from "@/types/FormInputs";

interface TextareaProps {
    id: keyof FormInputs;  // id burada da FormInputs anahtarlarına sınırlı
    required: boolean;
    register: UseFormRegister<FormInputs>
    placeholder: string;
    rows?: number;
    cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({id, register, required, placeholder, rows = 4, cols = 140}) => {
    return (
        <textarea

            id={id}
            {...register(id, {required: required})}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            className={styles.textarea}
        />
    );
};

export default Textarea;
