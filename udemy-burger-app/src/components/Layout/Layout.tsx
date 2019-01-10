import * as React from 'react'

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import * as classes from './Layout.css';
import {PropsWithChildren} from "../../interfaces/Interfaces";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

interface LayoutState {
    showSideDrawer: boolean;
}

class Layout extends React.Component<PropsWithChildren, LayoutState> {
    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render() {
        return (
            <Aux>
                <Toolbar/>
                <SideDrawer closed={this.sideDrawerClosedHandler} openBackdrop={this.state.showSideDrawer}/>
                < main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;

