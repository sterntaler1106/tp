import * as React from 'react'

import Aux from '../../hoc/Auxiliary';
import * as classes from './Layout.css';

interface LayoutProps {
    children: React.ReactNode;
}

const layout = (props: LayoutProps) => (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            < main className={classes.Content}>
                {props.children}
            </main>
        </Aux>

    )
;

export default layout;

