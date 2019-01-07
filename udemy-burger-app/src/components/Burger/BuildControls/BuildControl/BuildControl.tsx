import * as React from 'react';

import * as classes from './BuildControl.css'

interface BuildControlProps {
    label: string;
}

const buildControl = (props: BuildControlProps) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;