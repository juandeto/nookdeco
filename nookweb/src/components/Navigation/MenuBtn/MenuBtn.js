import React from "react";

import classes from "./MenuBtn.module.css";


const menu = (props) => (
<div className={classes.DrawerToggle} onClick={props.openSideDrawer}>
    <div></div>
    <div></div>
    <div></div>
</div>
);

export default menu;
