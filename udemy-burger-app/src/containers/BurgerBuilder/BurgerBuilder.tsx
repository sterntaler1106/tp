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
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
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