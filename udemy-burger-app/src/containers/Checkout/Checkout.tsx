import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Ingredients, WithIngredients} from "../../interfaces/Interfaces";
import {Route, RouteComponentProps} from "react-router-dom";
import ContactData from "./ContactData/ContactData";

interface CheckoutState extends WithIngredients {
}

class Checkout extends React.Component<RouteComponentProps, CheckoutState> {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1,
        }
    }

    getAsNumber(value: string | null): number {
        if (typeof value === "string") {
            return +value;
        } else
            return 0;
    }

    componentDidMount(): void {
        const query = new URLSearchParams(this.props.location.search);

        const ingredients: Ingredients = {
            salad: this.getAsNumber(query.get('salad')),
            cheese: this.getAsNumber(query.get('cheese')),
            meat: this.getAsNumber(query.get('meat')),
            bacon: this.getAsNumber(query.get('bacon')),
        }

        this.setState({ingredients: ingredients});
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;