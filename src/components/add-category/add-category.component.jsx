import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategoryDocument } from "../../utils/firebase/firebase.utils";

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();

    const handleAddCategory = async (event) => {
        event.preventDefault();
        if (categoryName.trim()) {
            await createCategoryDocument(categoryName.trim());
            navigate('/recipes');
        }
    };

    const handleChange = (e) => {
        setCategoryName(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleAddCategory}>
                <label>
                    Add Category Name: 
                    <input type="text" name="category" value={categoryName} onChange={handleChange} />
                </label>
                <button type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
