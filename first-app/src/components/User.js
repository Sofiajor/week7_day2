import React from "react";

const User = props => {
    return (
        <article style={{ backgroundColor: props.color }}>
            <h3>Hello, {props.firstName} {props.lastName}!</h3>
            <img src={props.image} width="300" height="300" />
        </article>
    )
}

export default User;