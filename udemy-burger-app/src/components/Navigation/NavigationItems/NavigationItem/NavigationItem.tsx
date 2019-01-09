import * as React from 'react';

import * as classes from './NavigationItem.css'
import {PropsWithChildren} from "../../../../interfaces/Interfaces";

interface NavigationItemProps extends PropsWithChildren {
    link: string;
    active: boolean;
}

const navigationItem = (props: NavigationItemProps) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : ''}
        >{props.children}</a>
    </li>
);

export default navigationItem;