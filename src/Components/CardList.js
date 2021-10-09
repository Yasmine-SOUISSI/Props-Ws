import React from "react";
import Card from "./Card";

function CardList({ list }) {
    return (
        <div>
            {list.map((item, key) => (
                <Card item={item} key={key} />
            ))}
        </div>
    );
}

export default CardList;
