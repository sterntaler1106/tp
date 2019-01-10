import * as React from 'react';
import * as classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../Logo/Logo'

interface ToolbarProps {
    drawerToggleClicked: any; // TODO besseren Type wählen
}


const toolbar = (props: ToolbarProps) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;