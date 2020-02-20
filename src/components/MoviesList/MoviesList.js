import React, { useState, useContext } from 'react';
import { IoIosMenu } from 'react-icons/io';
import Button from '../Button/Button';
import CustomModal from '../Modal/CustomModal';
import { Context } from '../../context/moviesContext';
import './MoviesList.css';

const MoviesList = ({ movieName, movieID, movieDesc, movieType, movieRate }) => {
    const { deleteMovie, editMovie } = useContext(Context);
    const [ editName, setEditName ] = useState(movieName);
    const [ editDescription, setEditDescription ] = useState(movieDesc);
    const [ showModal, setShowModal ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);

    const handleEdit = () => {
        setEditMode(true);
        setShowModal(true);
    }

    const handleDelete = () => {
        setEditMode(false);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const triggerEdit = () => {
        setShowModal(false);
        editMovie(movieID, editName, editDescription, movieType, movieRate);
    }

    const triggerDelete = () => {
        setShowModal(false);
        deleteMovie(movieID);
    }

    return (
        <div className="MovieItem">
            {editMode ? (
                <CustomModal
                    showModal={showModal}
                    handleEdit={triggerEdit}
                    handleClose={handleClose}
                    modalTitle={`Edit Movie ${movieName}`}
                    modalBody={(
                        <div>
                            <input value={editName} onChange={(e) => setEditName(e.target.value)} />
                            <input value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        </div>
                    )}
                    modalProceedButton="Edit"
                    modalRejectButton="Close"
                    buttonColor="success"
                />
            ) : (
                <CustomModal
                    showModal={showModal}
                    handleDelete={triggerDelete}
                    handleClose={handleClose}
                    modalTitle={`Delete Movie ${movieName}`}
                    modalBody="Are You Sure ?"
                    modalProceedButton="Delete"
                    modalRejectButton="Close"
                    buttonColor="danger"
                />
            )}
            
            <div className="MovieName">
                <IoIosMenu className='Icon-main' />
                {movieName}
            </div>
            <div>
                <Button
                    buttonColor="button-edit"
                    handleClick={handleEdit}
                >Edit</Button>
                <Button
                    buttonColor="button-delete"
                    handleClick={handleDelete}
                >Delete</Button>
            </div>
        </div>
    )
}

export default MoviesList;