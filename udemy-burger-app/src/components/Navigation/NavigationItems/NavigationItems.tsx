import * as React from 'react';

import * as classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

interface NavigationItemsProps {
}

const navigationItems = (props: NavigationItemsProps) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/orders" exact={false}>Orders</NavigationItem>
    </ul>
);

export default navigationItems;