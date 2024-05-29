// src/components/update-category/update-category.component.js

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateCategoryDocument } from "../../utils/firebase/firebase.utils";

const UpdateCategory = () => {
    const { oldCategoryName } = useParams();
    const [newCategoryName, setNewCategoryName] = useState(oldCategoryName);
    const navigate = useNavigate();

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        if (newCategoryName && newCategoryName !== oldCategoryName) {
            await updateCategoryDocument(oldCategoryName, newCategoryName);
            navigate('/recipes'); // Navigate back to categories page or any other page
        }
    };

    const handleChange = (e) => {
        setNewCategoryName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleUpdateCategory}>
                <label>
                    Update Category Name:
                    <input 
                        type="text" 
                        name="category" 
                        value={newCategoryName} 
                        onChange={handleChange} 
                    />
                </label>
                <button type="submit">Update Category</button>
            </form>
        </div>
    );
};

export default UpdateCategory;
