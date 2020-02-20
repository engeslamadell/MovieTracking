import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { Accordion, Card } from 'react-bootstrap';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import './MovieType.css';

const MovieType = ({ movieCategory, movieDetails, eventKey, movies, setMovies, categoryDescription }) => {
return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey} className="card-header">
                <IoIosMenu className='Icon-main' />
                {movieCategory}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body className="CardMovieDetails">
                    <AddMovieForm
                        movieCategory={movieCategory}
                        movies={movies}
                        setMovies={setMovies}
                    />
                    {movieDetails}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default MovieType;