import * as React from 'react';

import Button from '../../../components/UI/Button/Button';
import * as classes from './ContactData.css';
import {WithIngredients} from "../../../interfaces/Interfaces";

import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {RouteComponentProps} from "react-router";

export interface ContactDataProps extends WithIngredients, RouteComponentProps {
    price: number;
}

interface ContactDataState {
    name: string;
    email: string;
    address: {
        street: string,
        zipCode: string,
    };
    loading: boolean;
}

class ContactData extends React.Component<ContactDataProps, ContactDataState> {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: '',
        },
        loading: false,
    }

    orderHandler = (event: any) => { // TODO any ist nicht gut
        console.log('in order handler')
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // in real app -> recalculate price on server
            customer: {
                name: 'Esther Fuhrmann',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '12345',
                    country: 'Germany',
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest',
        }
        axios.post('/orders.json', order) // .json nur für Firebase
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="your name"/>
                <input className={classes.Input} type="text" name="email" placeholder="your email"/>
                <input className={classes.Input} type="text" name="street" placeholder="your street"/>
                <input className={classes.Input} type="text" name="zipCode" placeholder="your zip"/>
                <Button buttonType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;