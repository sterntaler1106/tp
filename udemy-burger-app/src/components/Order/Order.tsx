import * as React from 'react';
import * as classes from './Order.css'

interface OrderProps {
}

const order = (props: OrderProps) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients:</p>
            <p>Price: <strong> USD 4</strong></p>
        </div>
    );
};

export default order;