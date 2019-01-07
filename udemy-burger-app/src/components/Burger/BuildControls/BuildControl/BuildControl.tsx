import * as React from 'react';

import * as classes from './BuildControl.css'

interface BuildControlProps {
    label: string;
    disabled: any; // TODO besseren Type wählen
    added: any; // TODO besseren Type wählen
    removed: any; // TODO besseren Type wählen
}

const buildControl = (props: BuildControlProps) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}
        >Less
        </button>
        <button
            className={classes.More}
            onClick={props.added}
        >More
        </button>
    </div>
);

export default buildControl;