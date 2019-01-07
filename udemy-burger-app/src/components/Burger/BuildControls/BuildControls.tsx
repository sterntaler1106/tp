import * as React from 'react';
import BuildControl from "./BuildControl/BuildControl";

import * as classes from './BuildControls.css';

interface BuildControlProps {
    ingredientAdded: any; // TODO besseren Type wählen
    ingredientRemoved: any; // TODO besseren Type wählen
}

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props: BuildControlProps) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
        />)}
    </div>
);

export default buildControls;