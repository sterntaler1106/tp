import * as React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import * as classes from './SideDrawer.css'

interface SidedrawerProps {
    closed: any // TODO besseren Type
    openBackdrop: boolean;
}

const sideDrawer = (props: SidedrawerProps) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.openBackdrop) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.openBackdrop} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;