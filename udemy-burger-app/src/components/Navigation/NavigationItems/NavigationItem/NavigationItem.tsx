import * as React from 'react';

import * as classes from './NavigationItem.css'
import {PropsWithChildren} from "../../../../interfaces/Interfaces";
import {NavLink} from "react-router-dom";

interface NavigationItemProps extends PropsWithChildren {
    link: string;
    exact: boolean;
}

const navigationItem = (props: NavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}
        >{props.children}</NavLink>
    </li>
);

export default navigationItem;