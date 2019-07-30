import React from 'react';
import classes from './Order.module.css'

const order = (props) => {
    const Ingredients = [];

    for (let ingredientName in props.Ingredients) {
        Ingredients.push({
            name: ingredientName,
            amount: props.Ingredients[ingredientName]
        })
    }

    const ingredientOutput = Ingredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong> USD {props.price.toFixed(2)}</strong></p>
        </div>
    )

};

export default order;