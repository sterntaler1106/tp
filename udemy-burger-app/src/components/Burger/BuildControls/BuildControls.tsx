import * as React from 'react';
import BuildControl from "./BuildControl/BuildControl";

import * as classes from './BuildControls.css';

interface BuildControlProps {
    ingredientAdded: any; // TODO besseren Type wählen
    ingredientRemoved: any; // TODO besseren Type wählen
    disabled: any; // TODO besseren Typ wählen
    price: number;
    purchasable: boolean;
    ordered: any; // TODO besseren Type wählen
}

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props: BuildControlProps) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        />)}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >ORDER NOW
        </button>
    </div>
);

export default buildControls;