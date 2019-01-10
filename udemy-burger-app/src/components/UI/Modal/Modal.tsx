import * as React from 'react';
import * as classes from './Modal.css';
import {PropsWithChildren} from "../../../interfaces/Interfaces";
import Aux from '../../../hoc/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

interface ModalProps extends PropsWithChildren {
    show: boolean;
    modalClosed: any; // TODO besseren Type wählen
}

class Modal extends React.Component<ModalProps, {}> {
    shouldComponentUpdate(nextProps: Readonly<ModalProps>, nextState: Readonly<{}>, nextContext: any): boolean {
        return nextProps.show != this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? 1 : 0
                }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;