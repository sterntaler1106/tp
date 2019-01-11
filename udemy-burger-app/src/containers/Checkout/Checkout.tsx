import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {WithIngredients} from "../../interfaces/Interfaces";

interface CheckoutProps {
}

interface CheckoutState extends WithIngredients {
}

class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1,
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;