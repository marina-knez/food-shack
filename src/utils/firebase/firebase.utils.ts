import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
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
    onSnapshot,
    DocumentReference,
    DocumentSnapshot,
    QuerySnapshot,
    QueryDocumentSnapshot,
    DocumentData,
    FirestoreDataConverter,
    Timestamp
} from 'firebase/firestore';

import { Category, CategoryItem } from '../../store/categories/category.types';

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

export type ObjectToAdd = {
    categoryName: string;
};

const categoryConverter: FirestoreDataConverter<Category> = {
    toFirestore(category: Category): DocumentData {
        return {
            ...category,
            recipes: category.recipes.map(recipe => ({
                ...recipe,
                dateAdded: recipe.dateAdded ? Timestamp.fromDate(recipe.dateAdded) : null // Convert to Firestore Timestamp
            }))
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot): Category { // Use generic QueryDocumentSnapshot
        const data = snapshot.data() as DocumentData;
        return {
            categoryName: data.categoryName,
            recipes: data.recipes.map((recipe: any) => ({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                noOfPeople: recipe.noOfPeople,
                time: recipe.time,
                img: recipe.img,
                ingredients: recipe.ingredients.map((ingredient: any) => ({
                    item: ingredient.item,
                    quantity: ingredient.quantity,
                    unit: ingredient.unit
                })),
                instructions: recipe.instructions.map((instruction: any) => instruction),
                difficulty: recipe.difficulty,
                dateAdded: recipe.dateAdded ? (recipe.dateAdded as Timestamp).toDate() : null
            }))
        };
    }
};


// Function to add a collection and documents
export const addCollectionAndDocuments = async<T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]): Promise<void> => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.categoryName.toLowerCase());
        batch.set(docRef, object);
    });
    await batch.commit();
};


// Fetch all categories and their documents
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const categoryCollectionRef = collection(db, 'categories').withConverter(categoryConverter);
    const querySnapshot: QuerySnapshot<Category> = await getDocs(categoryCollectionRef);
    return querySnapshot.docs.map(doc => doc.data());
};

// Real-time listener for categories snapshots
export const onCategoriesSnapshot = (callback: (snapshot: QuerySnapshot<Category>) => void) => {
    const collectionRef = collection(db, 'categories').withConverter(categoryConverter);
    const q = query(collectionRef);
    return onSnapshot(q, callback);
};

// Create a new category document
export const createCategoryDocument = async (categoryName: string): Promise<void> => {
    try {
        const lowerCaseCategoryName = categoryName.toLowerCase();
        const categoryDocRef = doc(db, 'categories', lowerCaseCategoryName);
        const categorySnapshot = await getDoc(categoryDocRef);
        if (!categorySnapshot.exists()) {
            await setDoc(categoryDocRef, {
                categoryName: lowerCaseCategoryName,
                recipes: [],
            });
        }
    } catch (error) {
        console.error('Error creating category document:', error);
    }
};

// Update an existing category's name
export const updateCategoryDocument = async (oldCategoryName: string, newCategoryName: string): Promise<void> => {
    try {
        const oldCategoryDocRef = doc(db, 'categories', oldCategoryName.toLowerCase());
        const oldCategorySnapshot = await getDoc(oldCategoryDocRef);
        if (oldCategorySnapshot.exists()) {
            const { recipes } = oldCategorySnapshot.data()!;
            await setDoc(doc(db, 'categories', newCategoryName.toLowerCase()), {
                categoryName: newCategoryName,
                recipes: recipes,
            });
            await deleteDoc(oldCategoryDocRef);
        } else {
            console.error('Old category document does not exist.');
        }
    } catch (error) {
        console.error('Error updating category document:', error);
    }
};

// Delete a category document
export const deleteCategoryDocument = async (categoryName: string): Promise<void> => {
    try {
        const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase());
        await deleteDoc(categoryDocRef);
    } catch (error) {
        console.error('Error deleting category document:', error);
    }
};

const getCategoryDocumentRefAndSnapshot = async (categoryName: string): Promise<{ categoryDocRef: DocumentReference, categorySnapshot: DocumentSnapshot<Category> }> => {
    try {
      const categoryDocRef = doc(db, 'categories', categoryName.toLowerCase()).withConverter(categoryConverter);
      const categorySnapshot = await getDoc(categoryDocRef);
      if (!categorySnapshot.exists()) {
        throw new Error(`Category ${categoryName} does not exist`);
      }
      return { categoryDocRef, categorySnapshot };
    } catch (error) {
      console.error('Error getting category document reference and snapshot:', error);
      throw error;
    }
  };
  

// Get a recipe document by its ID
export const getRecipeDocumentById = async (categoryName: string, recipeId: number): Promise<CategoryItem | null> => {
    try {
        const { categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName.toLowerCase());
        const categoryData = categorySnapshot.data();
        const recipe = categoryData?.recipes.find(recipe => recipe.id === recipeId) || null;
        return recipe;
    } catch (error) {
        console.error('Error fetching recipe by ID:', error);
        return null;
    }
};

// Add a new recipe to a specified category
export const createRecipeDocument = async (categoryName: string, recipeData: CategoryItem): Promise<void> => {
    try {
        const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
        const categoryData = categorySnapshot.data();
        const recipes = categoryData?.recipes || [];
        const highestId = recipes.reduce((maxId, recipe) => Math.max(maxId, recipe.id), 0);
        const newRecipeId = highestId + 1;

        const newRecipe = { ...recipeData, id: newRecipeId, dateAdded: new Date() }; // Add current date as dateAdded
        const updatedRecipes = [...recipes, newRecipe];

        await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
        console.error('Error adding recipe:', error);
        throw error;
    }
};

// Update an existing recipe
export const updateRecipeDocument = async (categoryName: string, updatedRecipe: CategoryItem): Promise<void> => {
    try {
      const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
      const categoryData = categorySnapshot.data();
      const updatedRecipes = categoryData?.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }
  };

// Delete a recipe by ID
export const deleteRecipeDocument = async (categoryName: string, recipeId: number): Promise<void> => {
    try {
        const { categoryDocRef, categorySnapshot } = await getCategoryDocumentRefAndSnapshot(categoryName);
        const categoryData = categorySnapshot.data()!;
        const updatedRecipes = categoryData.recipes.filter(recipe => recipe.id !== recipeId);
        await setDoc(categoryDocRef, { ...categoryData, recipes: updatedRecipes });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        throw error;
    }
};

// Search for recipes across all categories
export const searchRecipes = async (queryStr: string): Promise<CategoryItem[]> => {
    try {
        const recipesRef = collection(db, 'categories').withConverter(categoryConverter);
        const q = query(recipesRef);
        const querySnapshot: QuerySnapshot<Category> = await getDocs(q);

        const searchResults: CategoryItem[] = [];
        querySnapshot.forEach((doc) => {
            const { recipes } = doc.data();
            const filteredRecipes = recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(queryStr.toLowerCase())
            );
            searchResults.push(...filteredRecipes);
        });

        return searchResults;
    } catch (error) {
        console.error('Error searching recipes:', error);
        return [];
    }
};

export type AdditionalInformation = {
    displayName?: string;
}

export type UserData = {
    createdAt: Date;
    email: string;
    displayName: string;
}

// Create a user document from authentication details
export const createUserDocumentFromAuth = async (userAuth: User, additionalInformation = {} as AdditionalInformation): Promise<UserData | null> => {
    if (!userAuth) return null;
    const userDocRef = doc(db, 'users', userAuth.uid);

    try {
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

        return {
            displayName: userAuth.displayName || '',
            email: userAuth.email || '',
            createdAt: new Date(),
            ...additionalInformation
        } as UserData;

    } catch (error) {
        console.error('Error creating the user', error);
        return null;
    }
};

// Create a new user with email and password
export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error creating auth user with email and password:', error);
    }
};

// Sign in a user with email and password
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error('Error signing in auth user with email and password:', error);
    }
};

// Get a user document by userAuth object
export const getUserDocument = async (userAuth: User | null): Promise<UserData | null> => {
    if (!userAuth) return null;
    try {
        const userDocRef = doc(db, 'users', userAuth.uid);
        const userSnapshot = await getDoc(userDocRef);
        if (userSnapshot.exists()) {
            // Type assertion to UserData
            return userSnapshot.data() as UserData;
        } else {
            console.error('User document not found');
            return null;
        }
    } catch (error) {
        console.error('Error getting user document:', error);
        return null;
    }
};

// Sign out the current user
export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error signing out user:', error);
    }
};

// Set up a listener for auth state changes
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);
