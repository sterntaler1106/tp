import * as React from 'react';
import Burger from "../../Burger/Burger";
import {WithIngredients} from "../../../interfaces/Interfaces";
import Button from "../../UI/Button/Button";
import * as classes from './CheckoutSummary.css';

interface CheckoutSummaryProps extends WithIngredients {
    onCheckoutCancelled: any // TODO besserer Type
    onCheckoutContinued: any // TODO besserer Type
}

const checkoutSummary = (props: CheckoutSummaryProps) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                buttonType={"Danger"}
                clicked={props.onCheckoutCancelled}
            >CANCEL</Button>
            <Button
                buttonType={"Success"}
                clicked={props.onCheckoutContinued}
            >CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;