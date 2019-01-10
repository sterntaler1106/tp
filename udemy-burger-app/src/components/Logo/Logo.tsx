import * as React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'

import * as classes from './Logo.css'

interface LogoProps {
    height: string;
}

const logo = (props: LogoProps) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;