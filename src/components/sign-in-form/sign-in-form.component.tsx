import { FormEvent, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, getUserDocument } from '../../utils/firebase/firebase.utils';
import { setCurrentUser } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { SignInFormTitle, SignInFormFieldContainer, SignInFormButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            if (user) {
                const userDoc = await getUserDocument(user);
                if (userDoc) {
                    dispatch(setCurrentUser(userDoc));
                    navigate('/');
                } else {
                    console.error('No user document found');
                }
            }
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const userCredential = await signInAuthUserWithEmailAndPassword(email, password);
            if (userCredential) {
                const { user } = userCredential;
                const userDoc = await getUserDocument(user);
                if (userDoc) {
                    dispatch(setCurrentUser(userDoc));
                    resetFormFields();
                    navigate('/');
                } else {
                    console.error('No user document found');
                }
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <SignInFormTitle>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
            </SignInFormTitle>
            <SignInFormFieldContainer onSubmit={handleSubmit}>
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
                    placeholder="Enter your password"
                    value={password} 
                />
                <SignInFormButtonsContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </SignInFormButtonsContainer>
            </SignInFormFieldContainer>
        </div>
    )
};

export default SignInForm;