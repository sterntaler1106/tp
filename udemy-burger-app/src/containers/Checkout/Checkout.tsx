import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {WithIngredients} from "../../interfaces/Interfaces";
import * as H from 'history';

interface CheckoutProps {
    history: H.History;
}

interface CheckoutState extends WithIngredients {
}

class Checkout extends React.Component<CheckoutProps, CheckoutState> {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1,
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler}
                />
            </div>
        );
    }
}

export default Checkout;