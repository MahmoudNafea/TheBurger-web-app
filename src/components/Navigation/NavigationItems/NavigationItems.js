import React from 'react';
import classes from './NavigationItems.module.css';
import NavigatioItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigatioItem link="/" exact>Burger Builder</NavigatioItem>
        <NavigatioItem link="/orders">Orders</NavigatioItem>
    </ul>
);

export default navigationItems;