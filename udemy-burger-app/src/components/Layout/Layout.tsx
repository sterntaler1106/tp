import * as React from 'react'

import Aux from '../../hoc/Auxiliary'

interface LayoutProps {
    children: React.ReactNode;
}

const layout = (props: LayoutProps) => (
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            < main>
                {props.children}
            </main>
        </Aux>

    )
;

export default layout;

