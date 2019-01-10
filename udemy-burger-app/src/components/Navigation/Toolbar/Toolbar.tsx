import * as React from 'react';
import * as classes from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'


interface ToolbarProps {
}

const toolbar = (props: ToolbarProps) => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo height="80%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;