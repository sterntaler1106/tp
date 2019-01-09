import * as React from 'react';
import * as classes from './Toolbar.css'

interface ToolbarProps {
}

const toolbar = (props: ToolbarProps) => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div>LOGO</div>
            <nav>
                ...
            </nav>
        </header>
    );
};

export default toolbar;