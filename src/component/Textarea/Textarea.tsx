import React from 'react';
import {FieldValues, UseFormRegister,} from 'react-hook-form';
import styles from './Textarea.module.scss';

interface TextareaProps {
    id: string;
    required: boolean;
    register: UseFormRegister<FieldValues>
    placeholder: string;
    rows?: number;
    cols?: number;
}

const Textarea: React.FC<TextareaProps> = ({id, register, required, placeholder, rows = 4, cols = 140}) => {
    return (
        <textarea

            id={id}
            {...register(id, required)}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            className={styles.textarea}
        />
    );
};

export default Textarea;
