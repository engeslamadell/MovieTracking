import React from 'react';
import './Button.css';

const Button = ({ children, buttonColor, handleClick }) => {
    return (
        <button
            className={['custom-button-styles', buttonColor].join(' ')}
            onClick={handleClick}
        >{children}</button>
    )
}

export default Button;