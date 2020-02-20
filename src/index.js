import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from './context/moviesContext';

const AppRoot = () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
}
ReactDOM.render(<AppRoot />, document.getElementById('root'));