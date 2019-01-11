import * as React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

interface OrdersState {
    orders: any; // TODO any nicht ideal
    loading: boolean;
}

class Orders extends React.Component<{}, OrdersState> {

    state = {
        orders: [],
        loading: true,
    }

    componentDidMount(): void {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({loading: false, orders: fetchedOrders})
            })
            .catch(error => {
                this.setState({loading: false})
            });
    }

    render() {
        return (
            <div>
                <Order/>
                <Order/>
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);