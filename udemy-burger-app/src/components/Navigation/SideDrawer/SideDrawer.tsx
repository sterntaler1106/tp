import * as React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import * as classes from './SideDrawer.css'

interface SidedrawerProps {
}

const sideDrawer = (props: SidedrawerProps) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;