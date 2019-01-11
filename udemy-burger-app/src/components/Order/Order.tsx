import * as React from 'react';
import * as classes from './Order.css'
import {Ingredients} from "../../interfaces/Interfaces";

interface OrderProps {
    ingredients: Ingredients;
    price: number;
}

const order = (props: OrderProps) => {

    const ingredients: { name: string, amount: number }[] = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return (<span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>);
    });

    return (
        <div className={classes.Order}>
            {ingredientOutput}
            <p>Price: <strong> USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;