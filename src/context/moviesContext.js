import createDataContext from './createDataContext';
import moviesDB from '../Api/movies';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...state, { name: action.payload.name, description: action.payload.description, rate: Math.floor(Math.random() * 5), type: action.payload.type}]
        case 'ADD_CATEGORY':
            return [...state, { type: action.payload.type, description: action.payload.categoryDiscription }];
        case 'DELETE_MOVIE':
            return state.filter((movies) => movies.id !== action.payload);
        case 'EDIT_MOVIE':
            return state.map(movie => movie.id === action.payload.id ? action.payload : movie);
        case 'GET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const getMovies = (dispatch) => {
    return async () => {
        const response = await moviesDB.get('/categories');
        dispatch({type: 'GET_MOVIES', payload: response.data});
    }
}

const addMovie = (dispatch) => {
    return async (name, description, rate, type) => {
        await moviesDB.post('/categories',{name, description, rate, type})
        dispatch({type: 'ADD_MOVIE', payload: { name, description, rate, type }});
    }
}

const addCategory = (dispatch) => {
    return async (type, categoryDiscription) => {
        await moviesDB.post('/categories', { type, categoryDiscription });
        dispatch({ type: 'ADD_CATEGORY', payload: { type, categoryDiscription } });
    }
}

const deleteMovie = (dispatch) => {
    return async id => {
        await moviesDB.delete(`/categories/${id}`);
        dispatch({ type: 'DELETE_MOVIE', payload: id })
    }
}

const editMovie = (dispatch) => {
    return async (id, name, description, type, rate) => {
        await moviesDB.put(`/categories/${id}`, { name, description, type, rate });
        dispatch({ type: 'EDIT_MOVIE', payload: {id, name, description, type, rate}})
    }
}

export const { Context, Provider } = createDataContext(blogReducer, {addMovie, addCategory, deleteMovie, editMovie, getMovies}, [])