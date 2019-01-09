import * as React from 'react'

import Aux from '../../hoc/Auxiliary';
import * as classes from './Layout.css';
import {PropsWithChildren} from "../../interfaces/Interfaces";

const layout = (props: PropsWithChildren) => (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            < main className={classes.Content}>
                {props.children}
            </main>
        </Aux>

    )
;

export default layout;

