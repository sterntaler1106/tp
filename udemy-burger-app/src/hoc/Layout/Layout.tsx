import * as React from 'react'

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import * as classes from './Layout.css';
import {PropsWithChildren} from "../../interfaces/Interfaces";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

interface LayoutState {
    showSideDrawer: boolean;
}

class Layout extends React.Component<PropsWithChildren, LayoutState> {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState: LayoutState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} openBackdrop={this.state.showSideDrawer}/>
                < main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;

