import * as React from "react";

import Aux from '../../hoc/Auxiliary'
import Burger from "../../components/Burger/Burger";

interface BurgerBuilderProps {

}

interface BurgerBuilderState {
    ingredients: Ingredients
}

// TODO: Duplication von Interface verhindern
interface Ingredients {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

class BurgerBuilder extends React.Component<BurgerBuilderProps, BurgerBuilderState> {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;