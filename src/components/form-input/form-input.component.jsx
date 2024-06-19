import { InputFieldContainer } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <InputFieldContainer>
            <label>{label}</label>
            <input {...otherProps} />
        </InputFieldContainer>
    )
};

export default FormInput;