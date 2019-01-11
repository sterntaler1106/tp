import * as React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {Ingredients} from "../../interfaces/Interfaces";

interface OrdersState {
    orders: OrderData[];
    loading: boolean;
}

interface OrderData {
    id: string;
    ingredients: Ingredients;
    price: number;
}

class Orders extends React.Component<{}, OrdersState> {

    state = {
        orders: [],
        loading: true,
    }

    componentDidMount(): void {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders: OrderData[] = [];
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
                {this.state.orders.map((order: OrderData) => {
                    return <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                })};
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);