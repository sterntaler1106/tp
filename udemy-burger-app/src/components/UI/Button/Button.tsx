import * as React from 'react';
import {PropsWithChildren} from "../../../interfaces/Interfaces";

import * as classes from './Button.css'

interface ButtonProps extends PropsWithChildren {
    clicked: any; // TODO besseren Type wählen
    buttonType: string; // TODO Enum wäre vielleicht besser
}

const button = (props: ButtonProps) => {
    return (
        <button
            className={[classes.Button, (classes as any)[props.buttonType]].join(' ')}
            onClick={props.clicked}
        >{props.children}</button>
    );
};

export default button;