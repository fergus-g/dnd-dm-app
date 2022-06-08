import { Fragment } from "react";


import icewindHeader from "../../assets/icewind-header.jpg";

import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>

        <h1>DM-Helper</h1>
       
      </header>
      <div className={classes['main-image']}>
      <img src={icewindHeader} alt="campaign header" />

      </div>
    </Fragment>
  );
};

export default Header;
