import React from 'react';
import classes from './NavigationItems.module.css';
import NavigatioItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigatioItem link="/" exact>Burger Builder</NavigatioItem>
        {props.isAuthenticated ? <NavigatioItem link="/orders">Orders</NavigatioItem> : null}
        {!props.isAuthenticated ?
            <NavigatioItem link="/auth">Authenticate</NavigatioItem>
            : <NavigatioItem link="/logout">Logout</NavigatioItem>}
    </ul>
);

export default navigationItems;