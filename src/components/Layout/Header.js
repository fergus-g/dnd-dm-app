import { Fragment } from "react";

import CampaignSelector from "../Campaign/CampaignSelector";
import icewind from "../../assets/icewind-header.jpg";
import strahd from "../../assets/curseofstrahd-header.jpg"
import waterdeep from "../../assets/waterdeep-header.jpg"
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DM-Helper</h1>
      </header>
      <div className={classes['main-image']}>
      <img src={props.campaign} alt="campaign header" />

      </div>
    </Fragment>
  );
};

export default Header;
