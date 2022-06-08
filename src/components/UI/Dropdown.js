import { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  const [campaign, setCampaign] = useState();

  const dropdownHandler = (e) => {
    console.log(e);
    setCampaign(e);
  };
  return (
    <div className={classes.dropdown}>
      <select onSelect={dropdownHandler} className={classes.dropbtn}>
        <option value="campaign"></option>
        <option value="icewind">Icewind Dale: Rime of the Frost Maiden</option>
        <option value="strahd">Curse of Strahd</option>
        <option value="waterdeep">Waterdeep: Dragon Heist</option>
      </select>
    </div>
  );
};

export default Dropdown;
