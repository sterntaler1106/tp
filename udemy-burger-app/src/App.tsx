import React, {Component} from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import * as classes from './components/Order/CheckoutSummary/CheckoutSummary.css';

class App extends Component<{}, {}> {

    render() {
        return (
            <div className={classes.CheckoutSummary}>
                <Layout>
                    <BurgerBuilder/>
                    <Checkout/>
                </Layout>
            </div>
        );
    }
}

export default App;
