import React, { useState, useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Context } from '../../context/moviesContext';
import './AddCategoryForm.css';

const AddCategoryForm = ({ moviesCaregories, movies, setMovies }) => {
    const { addCategory } = useContext(Context);
    const [ categoryName, setCategoryName ] = useState('');
    const [ categoryDescription, setCategoryDescription ] = useState('');
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    return (
        <div className="add-category-container">
            <Alert variant="success" show={showSuccess} onClose={() => setShowSuccess(false)} dismissible>Category Added Successfully</Alert>
            <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>This Category is Already Exist</Alert>
            <h4>Add Category</h4>
            <form>
                <input
                    className="input-style"
                    placeholder="English Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <input
                    className="input-style"
                    placeholder="English Description"
                    value={categoryDescription}
                    onChange={(e) => setCategoryDescription(e.target.value)}
                />
                <button className="button" onClick={(e) => {
                    
                    e.preventDefault();
                    if(moviesCaregories.includes(categoryName)) {
                        setShow(true);
                        setTimeout(() => {
                            setShow(false);
                        }, 2000);
                    }else {
                        addCategory(categoryName, categoryDescription);
                        setShowSuccess(true);
                        setTimeout(() => {
                            setShowSuccess(false);
                        }, 2000);
                        setShow(false);
                        setCategoryName('');
                        setCategoryDescription('');
                    }
                }}>Create Category</button>
            </form>
        </div>
    );
}

export default AddCategoryForm;