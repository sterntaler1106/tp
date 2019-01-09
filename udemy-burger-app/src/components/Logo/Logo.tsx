import * as React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'

import * as classes from './Logo.css'

interface LogoProps {
}

const logo = (props: LogoProps) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;