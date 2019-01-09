import * as React from 'react';
import * as classes from './Toolbar.css'
import Logo from '../../Logo/Logo'

interface ToolbarProps {
}

const toolbar = (props: ToolbarProps) => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
                ...
            </nav>
        </header>
    );
};

export default toolbar;