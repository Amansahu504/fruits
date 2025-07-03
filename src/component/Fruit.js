import React from "react";

const Fruit = (props) => {
    return (
        <div className="fruit">
            <h1>List of Fruits</h1>
            {props.fruits.map((fruit, index) => (
               <div key={index}>
                    <p>Name: {fruit.name}</p>
                    <p>Color: {fruit.color}</p>
                <hr/>
                </div>
            ))}
        </div>
    );
};
export default Fruit;


