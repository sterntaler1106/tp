import * as React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import * as classes from './Burger.css'

interface BurgerProps {
    ingredients: Ingredients
}

// TODO: Duplication von Interface verhindern
interface Ingredients {
    [key: string]: number;

    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

const burger = (props: BurgerProps) => {
    // TODO was ist der bessere Typ als any in diesem Fall?
    let transformedIngredients: any = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients.</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
};

export default burger;