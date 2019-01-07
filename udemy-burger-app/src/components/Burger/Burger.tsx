import * as React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import * as classes from './Burger.css'

interface BurgerProps {
    ingredients: Ingredients
}

// TODO: Duplication von Interface verhindern
interface Ingredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

const burger = (props: BurgerProps) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array((props.ingredients as any)[igKey])].map((_, i) => { // TODO index signature nochmal nachlesen
                return <BurgerIngredient key={igKey + i} type={igKey}/>
            })
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
};

export default burger;