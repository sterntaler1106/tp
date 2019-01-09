import * as React from 'react'

import * as classes from './Backdrop.css'

interface BackdropProps {
    show: boolean;
    clicked: any; // TODO besseren Type wählen
}

const backdrop = (props: BackdropProps) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;