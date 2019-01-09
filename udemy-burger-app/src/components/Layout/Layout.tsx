import * as React from 'react'

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import * as classes from './Layout.css';
import {PropsWithChildren} from "../../interfaces/Interfaces";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props: PropsWithChildren) => (
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        < main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

