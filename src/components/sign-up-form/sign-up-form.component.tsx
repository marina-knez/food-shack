import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../store/user/user.action";

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password);
            if (userCredential) {
                const { user } = userCredential;
                const userDoc = await createUserDocumentFromAuth(user, { displayName });
                if (userDoc) {
                    dispatch(setCurrentUser(userDoc)); // Pass UserData to the action
                    resetFormFields();
                    navigate('/');
                } else {
                    console.error('No user document created');
                }
            }
        } catch (error) {
            console.log('User creation encountered an error', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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