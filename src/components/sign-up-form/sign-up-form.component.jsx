import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { UserContext } from "../../contexts/user.context";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignUpFormTitle, SignUpFormFieldContainer, SignUpFormButtonsContainer } from "./sign-up-form.styles";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, { displayName });
            setCurrentUser({ ...user, displayName });
            resetFormFields();
            navigate('/');

        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered and error', error);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <SignUpFormTitle>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
            </SignUpFormTitle>
            <SignUpFormFieldContainer onSubmit={handleSubmit}>
                <FormInput 
                    label="Display Name" 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    placeholder="Chose your Display Name"
                    value={displayName} 
                />

                <FormInput 
                    label="Email" 
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    placeholder="Enter your Email"
                    value={email} 
                />

                <FormInput 
                    label="Password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    placeholder="Chose your password"
                    value={password} 
                />

                <FormInput 
                    label="Confirm password" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    placeholder="Confirm your password"
                    value={confirmPassword} 
                />
                <SignUpFormButtonsContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Sign Up</Button>
                </SignUpFormButtonsContainer>
            </SignUpFormFieldContainer>
        </div>
    )
};

export default SignUpForm;