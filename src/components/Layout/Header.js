import { Fragment, useContext } from "react";

import Button from "../UI/Button";
import header from "../../assets/dnd-header.webp";
import icewind from "../../assets/icewind-header.jpg";
import HeaderImg from "../UI/HeaderImg";
import classes from "./Header.module.css";
import { CampaignContext } from "../CampaignContext/CampaignContext";

const Header = (props) => {
  const img = useContext(CampaignContext);
  console.log(img);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DM-Helper</h1>
        <div>
          <Button onClick={props.onClick} name="Chapter Selection" />
          <Button name="Random Encounter" />
        </div>
      </header>
      <HeaderImg image={img} />
    </Fragment>
  );
};

export default Header;
