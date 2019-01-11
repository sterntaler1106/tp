import * as React from 'react';

import Button from '../../../components/UI/Button/Button';
import * as classes from './ContactData.css';

interface ContactDataProps {
}

interface ContactDataState {
    name: string;
    email: string;
    address: {
        street: string,
        zipCode: string,
    },
}

class ContactData extends React.Component<{}, {}> {
    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="your name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="your street"/>
                    <input className={classes.Input} type="text" name="zipCode" placeholder="your zip"/>
                    <Button buttonType="Success" clicked={console.log}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;