import * as React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {WithIngredients} from "../../../interfaces/Interfaces";
import Button from '../../UI/Button/Button'

interface OrderSummaryProps extends WithIngredients {
    purchaseCancelled: any; // TODO besseren Type wählen
    purchaseContinued: any; // TODO besseren Type wählen
    price: number;
}

const orderSummary = (props: OrderSummaryProps) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}> {igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;