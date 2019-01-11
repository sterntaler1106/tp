import React, {Component} from 'react';

import Layout from './hoc/Layout/Layout';
import Orders from './containers/Orders/Orders';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import * as classes from './components/Order/CheckoutSummary/CheckoutSummary.css';
import {Route, Switch} from "react-router";

class App extends Component<{}, {}> {

    render() {
        return (
            <div className={classes.CheckoutSummary}>
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/" exact={true} component={BurgerBuilder}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
