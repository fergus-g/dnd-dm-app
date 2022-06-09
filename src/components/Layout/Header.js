import { Fragment } from "react";

import CampaignSelector from "../Campaign/CampaignSelector";
import Button from "../UI/Button";
import icewind from "../../assets/icewind-header.jpg";
import strahd from "../../assets/curseofstrahd-header.jpg";
import waterdeep from "../../assets/waterdeep-header.jpg";
import header from "../../assets/dnd-header.webp";
import HeaderImg from "../UI/HeaderImg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DM-Helper</h1>
        <div>
          <Button name="Chapter Selection" />
          <Button name="Random Encounter" />
        </div>
      </header>
      <HeaderImg image={header} />
    </Fragment>
  );
};

export default Header;
