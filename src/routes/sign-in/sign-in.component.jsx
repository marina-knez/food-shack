import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
    auth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    useEffect(() => {
        async function getUserFromRedirectResponse() {
            const response = await getRedirectResult(auth);
            if(response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        getUserFromRedirectResponse();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sing In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in With Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in With Google Redirect
            </button>
        </div>
    )
}

export default SignIn;