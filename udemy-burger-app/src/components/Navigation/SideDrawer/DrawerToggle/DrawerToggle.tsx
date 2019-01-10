import * as React from 'react';

import * as classes from './DrawerToggle.css'

interface DrawerToggleProps {
    clicked: any; // TODO besseren Type wählen
}

const drawerToggle = (props: DrawerToggleProps) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;