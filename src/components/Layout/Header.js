import { Fragment } from "react";

import Button from "../UI/Button";
import header from "../../assets/dnd-header.webp";
import HeaderImg from "../UI/HeaderImg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>DM-Helper</h1>
        <div>
          <Button onClick={props.onClick} name="Chapter Selection" />
          <Button name="Random Encounter" />
        </div>
      </header>
      <HeaderImg image={header} />
    </Fragment>
  );
};

export default Header;
