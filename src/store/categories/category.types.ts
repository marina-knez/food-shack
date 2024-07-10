export enum CATEGORIES_ACTION_TYPES {
    SET_CATEGORIES = 'categories/SET_CATEGORIES'
}

export type CategoryItemIngredient = {
    item: string;
    quantity: number;
    unit: string,
}

export type CategoryItem =  {
    id: number;
    title: string;
    description: string;
    noOfPeople: number;
    time: number;
    img: string;
    ingredients: CategoryItemIngredient[];
    instructions: string[];
    difficulty: string;
    dateAdded: Date | null;
}

export type Category = {
    categoryName: string;
    recipes: CategoryItem[];
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}