// src/components/delete-category/delete-category.component.js

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteCategoryDocument } from "../../utils/firebase/firebase.utils";

const DeleteCategory = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteCategory = async () => {
            if (categoryName) {
                await deleteCategoryDocument(categoryName);
                navigate('/recipes'); // Navigate back to the home page or categories list after deletion
            }
        };

        deleteCategory();
    }, [categoryName, navigate]);

    return (
        <div>
            <h2>Deleting category {categoryName}...</h2>
        </div>
    );
};

export default DeleteCategory;
