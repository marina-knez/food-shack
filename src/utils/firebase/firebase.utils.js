import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    deleteDoc,
    onSnapshot
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANqdSJGw--0euez5Cjsmk5nPsqjxIaqP8",
    authDomain: "food-shack-db-9c964.firebaseapp.com",
    projectId: "food-shack-db-9c964",
    storageBucket: "food-shack-db-9c964.appspot.com",
    messagingSenderId: "1019269141418",
    appId: "1:1019269141418:web:7d86e00cde7890b68991d3"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.categoryName.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { categoryName, recipes } = docSnapshot.data();
        acc[categoryName.toLowerCase()] = recipes;
        return acc;
    }, {});

    return categoryMap;
}

export const onCategoriesSnapshot = (callback) => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    return onSnapshot(q, callback);
};

export const createCategoryDocument = async (categoryName) => {
    const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
    const categorySnapshot = await getDoc(categoryDocRef);

    if (!categorySnapshot.exists()) {
        await setDoc(categoryDocRef, {
            categoryName,
            recipes: [],
        });
    }
};

export const updateCategoryDocument = async (oldCategoryName, newCategoryName) => {
    const oldCategoryDocRef = doc(db, 'categories', oldCategoryName.toLowerCase());
    const oldCategorySnapshot = await getDoc(oldCategoryDocRef);

    if (oldCategorySnapshot.exists()) {
        const { recipes } = oldCategorySnapshot.data();
        await setDoc(doc(db, 'categories', newCategoryName.toLowerCase()), {
            categoryName: newCategoryName,
            recipes: recipes,
        });
        await deleteDoc(oldCategoryDocRef);
    }
};

export const deleteCategoryDocument = async (categoryName) => {
    const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
    await deleteDoc(categoryDocRef);
};

export const createRecipeDocument = async (categoryName, recipeData) => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        const categorySnapshot = await getDoc(categoryDocRef);

        if (categorySnapshot.exists()) {
            const categoryData = categorySnapshot.data();
            const highestId = categoryData.recipes.reduce((maxId, recipe) => Math.max(maxId, recipe.id), 0);
            const newRecipeId = highestId + 1;
            const updatedRecipes = [...categoryData.recipes, { ...recipeData, id: newRecipeId }];
            await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
        } else {
            throw new Error(`Category ${categoryName} does not exist`);
        }
    } catch (error) {
        console.error('Error adding recipe:', error.message);
        throw error;
    }
};

export const updateRecipeDocument = async (categoryName, updatedRecipe) => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        const categorySnapshot = await getDoc(categoryDocRef);

        if (categorySnapshot.exists()) {
            const categoryData = categorySnapshot.data();
            const updatedRecipes = categoryData.recipes.map(recipe =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            );
            await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
        } else {
            throw new Error(`Category ${categoryName} does not exist`);
        }
    } catch (error) {
        console.error('Error updating recipe:', error.message);
        throw error;
    }
};

export const deleteRecipeDocument = async (categoryName, recipeId) => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        const categorySnapshot = await getDoc(categoryDocRef);

        if (categorySnapshot.exists()) {
            const categoryData = categorySnapshot.data();
            const updatedRecipes = categoryData.recipes.filter(recipe => recipe.id !== recipeId);
            await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
        } else {
            throw new Error(`Category ${categoryName} does not exist`);
        }
    } catch (error) {
        console.error('Error deleting recipe:', error.message);
        throw error;
    }
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
 };

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
 };

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
 };

 export const signOutUser = async () => await signOut(auth);

 export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);