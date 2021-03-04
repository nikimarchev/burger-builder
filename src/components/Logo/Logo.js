import React from 'react'
import burgerLogo from '../../assets/burger-logo.png'
import classes from './Logo.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My burger" />
  </div>
);

export default Logo
