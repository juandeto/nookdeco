import React from "react";

import { Link } from 'react-router-dom';
import NavigationItems from "./../NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "./../../../components/Ul/Backdrop/Backdrop";
import Auxiliary from "./../../../hoc/Auxiliary";

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} >
      <Link to="/" onClick={props.closed}><h3>Nook</h3></Link>
        <nav>
          <NavigationItems closed={props.closed} showSubmenuHandler={props.showSubmenuFunction} showSubMenu={props.showSubMenu} />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
