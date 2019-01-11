import * as React from 'react';
import Order from '../../components/Order/Order';

interface OrdersProps {
}

class Orders extends React.Component {
    render() {
        return (
            <div>
                <Order/>
                <Order/>
            </div>
        );
    }
}

export default Orders;