import * as React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import * as classes from './Burger.css'

interface BurgerProps {

}

const burger = (props: BurgerProps) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            <BurgerIngredient type='cheese'></BurgerIngredient>
            <BurgerIngredient type='meat'></BurgerIngredient>
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
};

export default burger;