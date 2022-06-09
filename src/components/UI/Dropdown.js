import { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {

  return (
    <div className={classes.dropdown}>
      <select onSelect={() => props.campaignId} className={classes.dropbtn}>
        <option value="campaign"></option>
        <option value="icewind">Icewind Dale: Rime of the Frost Maiden</option>
        <option value="strahd">Curse of Strahd</option>
        <option value="waterdeep">Waterdeep: Dragon Heist</option>
      </select>
    </div>
  );
};

export default Dropdown;
