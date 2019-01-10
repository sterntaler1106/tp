import * as React from 'react';

interface DrawerToggleProps {
    clicked: any; // TODO besseren Type wählen
}

const drawerToggle = (props: DrawerToggleProps) => {
    return (
        <div onClick={props.clicked}>
            MENU
        </div>
    );
};

export default drawerToggle;