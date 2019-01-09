import * as React from 'react';
import * as classes from './Modal.css';
import {PropsWithChildren} from "../../../interfaces/Interfaces";

interface ModalProps extends PropsWithChildren {
    show: boolean;
}


const modal = (props: ModalProps) => (
    <div className={classes.Modal} style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0
    }}>
        {props.children}
    </div>
);

export default modal;