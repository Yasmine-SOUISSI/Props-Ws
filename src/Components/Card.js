import React from "react";

function Card({ item }) {
    return (
        <div>
            <p>{item.name}</p>
            <img
                style={{ width: "200px", borderRadius: "50%" }}
                src={item.imgSrc}
                alt={item.name}
            />
            <p>{item.price}</p>
        </div>
    );
}

export default Card;
