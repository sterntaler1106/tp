import * as React from 'react';
import * as classes from './Modal.css';
import {PropsWithChildren} from "../../../interfaces/Interfaces";
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

interface ModalProps extends PropsWithChildren {
    show: boolean;
    modalClosed: any; // TODO besseren Type wählen
}


const modal = (props: ModalProps) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? 1 : 0
        }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;