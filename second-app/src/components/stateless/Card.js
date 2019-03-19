import React from 'react';

const card = ({ title, director }) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>Director: {director}</p>
        </li>
    )
};

export default card;