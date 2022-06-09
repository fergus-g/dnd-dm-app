import icewind from "../../assets/icewind-header.jpg";
import strahd from "../../assets/curseofstrahd-header.jpg";
import waterdeep from "../../assets/waterdeep-header.jpg";
import classes from "../Layout/Header.module.css";

const HeaderImg = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={props.image} alt="campaign header" />
    </div>
  );
};

export default HeaderImg;
