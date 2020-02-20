import React, { useEffect, useContext } from 'react';
import {Accordion} from 'react-bootstrap';

import MovieType from '../src/components/MovieType/MovieType';
import AddCategoryForm from '../src/components/AddCategoryForm/AddCategoryForm';
import MoviesList from '../src/components/MoviesList/MoviesList';

import { Context } from '../src/context/moviesContext';
import './App.css';
function App() {
  const {state : movies, getMovies} = useContext(Context);
  
  

  useEffect(() => {
    getMovies();
  }, []);

  const moviesCategories = movies.map(movie => movie.type);
  const moviesCategoriesAfterRemovingDuplicates = Array.from(new Set(moviesCategories))
  return (
    <div className="App">
      <AddCategoryForm
        moviesCaregories={moviesCategoriesAfterRemovingDuplicates}
      />
      <Accordion className="accordion" defaultActiveKey="0">
        <h1>Movies Data</h1>
        {
          moviesCategoriesAfterRemovingDuplicates.map((category, index) => {
            
            return (
              <MovieType
                key={index}
                movieCategory={category}
                movieDetails={
                  movies.map(movie => {
                    return (
                      movie.type === category ? (
                        movie.name ? ( <MoviesList key={movie.id} movieName={movie.name} movieID={movie.id} movieDesc={movie.description} movieType={movie.type} movieRate={movie.rate} />
                        ) : (null)
                      ) : (null)
                    )
                  })
              }
                eventKey={index}
              />
            );
          })
        }
      </Accordion>
    </div>
  );
}
export default App;
