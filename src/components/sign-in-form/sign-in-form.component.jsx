import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, getUserDocument } from '../../utils/firebase/firebase.utils';
import { UserContext } from "../../contexts/user.context";

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
    const { setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDoc = await getUserDocument(user);
        setCurrentUser(userDoc);
        navigate('/');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            const userDoc = await getUserDocument(user);
            setCurrentUser(userDoc);
            resetFormFields();
            navigate('/');

        } catch (error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('incorrect password for email');
                    break;
                case "auth/user-not-found":
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (e) => {
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