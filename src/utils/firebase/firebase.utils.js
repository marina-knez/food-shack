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
    updateDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    deleteDoc,
    onSnapshot,
} from 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyANqdSJGw--0euez5Cjsmk5nPsqjxIaqP8",
    authDomain: "food-shack-db-9c964.firebaseapp.com",
    projectId: "food-shack-db-9c964",
    storageBucket: "food-shack-db-9c964.appspot.com",
    messagingSenderId: "1019269141418",
    appId: "1:1019269141418:web:7d86e00cde7890b68991d3"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Set up Google Auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

// Initialize authentication and Firestore
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();

// Function to add a collection and documents
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    try {
        const collectionRef = collection(db, collectionKey);
        const batch = writeBatch(db);
        objectsToAdd.forEach((object) => {
            const docRef = doc(collectionRef, object.categoryName.toLowerCase());
            batch.set(docRef, object);
        });
        await batch.commit();
        console.log('Collection and documents added successfully');
    } catch (error) {
        console.error('Error adding collection and documents:', error.message);
    }
};

// Fetch all categories and their documents
export const getCategoriesAndDocuments = async () => {
    const categoryCollectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(categoryCollectionRef);
    return querySnapshot;
  };

// Real-time listener for categories snapshots
export const onCategoriesSnapshot = (callback) => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    return onSnapshot(q, callback);
};

// Create a new category document
export const createCategoryDocument = async (categoryName) => {
    try {
        const lowerCaseCategoryName = categoryName.toLowerCase();
        const categoryDocRef = doc(db, 'categories', lowerCaseCategoryName);
        const categorySnapshot = await getDoc(categoryDocRef);
        if (!categorySnapshot.exists()) {
            await setDoc(categoryDocRef, {
                categoryName: lowerCaseCategoryName,  // Save the category name in lowercase
                recipes: [],
            });
        }
    } catch (error) {
        console.error('Error creating category document:', error.message);
    }
};

// Update an existing category's name
export const updateCategoryDocument = async (oldCategoryName, newCategoryName) => {
    try {
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
    } catch (error) {
        console.error('Error updating category document:', error.message);
    }
};

// Delete a category document
export const deleteCategoryDocument = async (categoryName) => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        await deleteDoc(categoryDocRef);
    } catch (error) {
        console.error('Error deleting category document:', error.message);
    }
};

// Get category document reference and snapshot
const getCategoryDocumentRefAndSnapshot = async (categoryName) => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        const categorySnapshot = await getDoc(categoryDocRef);
        if (!categorySnapshot.exists()) {
            throw new Error(`Category ${categoryName} does not exist`);
        }
        return { categoryDocRef, categorySnapshot };
    } catch (error) {
        console.error('Error getting category document reference and snapshot:', error.message);
        throw error;
    }
};

// Get a recipe document by its ID
export const getRecipeDocumentById = async (categoryName, recipeId) => {
    try {
        const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName.toLowerCase());
        const categoryData = categorySnapshot.data();
        const recipe = categoryData.recipes.find(recipe => recipe.id === recipeId);
        return recipe || null;
    } catch (error) {
        console.error('Error fetching recipe by ID:', error.message);
        return null;
    }
};

// Add a new recipe to a specified category
export const createRecipeDocument = async (categoryName, recipeData) => {
    try {
      const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
      const categoryData = categorySnapshot.data();
      const recipes = categoryData.recipes || [];
      const highestId = recipes.reduce((maxId, recipe) => Math.max(maxId, recipe.id), 0);
      const newRecipeId = highestId + 1;
  
      const newRecipe = { ...recipeData, id: newRecipeId, dateAdded: new Date() };
      const updatedRecipes = [...recipes, newRecipe];
  
      await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
      console.error('Error adding recipe:', error.message);
      throw error;
    }
  };

// Update an existing recipe
export const updateRecipeDocument = async (categoryName, updatedRecipe) => {
    try {
        const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
        const categoryData = categorySnapshot.data();
        const updatedRecipes = categoryData.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        );
        await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
        console.error('Error updating recipe:', error.message);
        throw error;
    }
};

// Delete a recipe by ID
export const deleteRecipeDocument = async (categoryName, recipeId) => {
    try {
        const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
        const categoryData = categorySnapshot.data();
        const updatedRecipes = categoryData.recipes.filter(recipe => recipe.id !== recipeId);
        await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
        console.error('Error deleting recipe:', error.message);
        throw error;
    }
};

// Search for recipes across all categories
export const searchRecipes = async (queryStr) => {
    try {
        const recipesRef = collection(db, 'categories');
        const q = query(recipesRef);
        const querySnapshot = await getDocs(q);

        const searchResults = [];
        querySnapshot.forEach((doc) => {
            const { recipes } = doc.data();
            const filteredRecipes = recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(queryStr.toLowerCase())
            );
            searchResults.push(...filteredRecipes);
        });

        return searchResults;
    } catch (error) {
        console.error('Error searching recipes:', error.message);
    }
};

// Create a user document from authentication details
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    try {
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);

        if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }

        return userDocRef;
    } catch (error) {
        console.error('Error creating user document from auth:', error.message);
    }
};

// Create a new user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error creating auth user with email and password:', error.message);
    }
};

// Sign in a user with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error signing in auth user with email and password:', error.message);
    }
};

// Get a user document by userAuth object
export const getUserDocument = async (userAuth) => {
    if (!userAuth) return null;
    try {
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (userSnapshot.exists()) {
            return userSnapshot.data();
        } else {
            console.error('User document not found');
            return null;
        }
    } catch (error) {
        console.error('Error getting user document:', error.message);
    }
};

// Sign out the current user
export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error signing out user:', error.message);
    }
};

// Set up a listener for auth state changes
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
