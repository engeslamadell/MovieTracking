import React, { useState, useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { Context } from '../../context/moviesContext';
import './AddMovieForm.css';

const AddMovieForm = ({ movieCategory }) => {
    const { addMovie } = useContext(Context);

    const [ movieName, setMovieName ] = useState('');
    const [ movieDescription, setMovieDescription ] = useState('Empty');
    const [show, setShow] = useState(false);

    return (
        <div className="container">
            <Alert variant="success" show={show} onClose={() => setShow(false)} dismissible>The Movie Has Been Added</Alert>
            <div className="MovieDetails">
                <div className="MovieName">
                    <p>Name*</p>
                    <p>{ movieName ? movieName : '------' }</p>
                </div>
                <div>
                    <p>Description</p>
                    <p className="DescriptionValue">{ movieDescription ? movieDescription : '-------' }</p>
                </div>
            </div>
            <h4>Movies</h4>
            <form>
                <input className="input-style" placeholder="English Name" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                <input className="input-style" placeholder="English Description" value={movieDescription === 'Empty' ? '' : movieDescription} onChange={(e) => setMovieDescription(e.target.value)}/>
                <button className="button" onClick={(e) => {
                    debugger;
                    e.preventDefault();
                    addMovie(movieName, movieDescription, Math.floor(Math.random() * 5), movieCategory)
                    setMovieName('');
                    setMovieDescription('Empty');
                    setShow(true);
                    setTimeout(() => {
                        setShow(false);
                    }, 2000);
                }}>Create</button>
            </form>
        </div>
    );
}

export default AddMovieForm;