import React from 'react';

const improvedCard = props => {

    return (
        <div className="movies-list-item">
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>

            {props.hasOscars && <p>Se llevó el Oscar 😉 </p>}
            {!props.hasOscars && <p>Sin Oscar aw... 😔 </p>}

            <button onClick={props.clickToDelete}>Borrar</button>
        </div>
    )
};

export default improvedCard;