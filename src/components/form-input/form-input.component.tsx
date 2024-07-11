import { FC, InputHTMLAttributes } from 'react';
import { InputFieldContainer } from './form-input.styles';

type FormInputProps = { label: string | JSX.Element} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <InputFieldContainer>
            <label>{label}</label>
            <input {...otherProps} />
        </InputFieldContainer>
    )
};

export default FormInput;