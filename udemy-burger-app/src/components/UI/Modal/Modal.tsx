import * as React from 'react';
import * as classes from './Modal.css';
import {PropsWithChildren} from "../../../interfaces/Interfaces";


const modal = (props: PropsWithChildren) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;