import classes from "../Layout/Header.module.css";
import header from "../../assets/dnd-header.webp";
import icewind from "../../assets/icewind-header.jpg";

const HeaderImg = (props) => {
  return (
    <div className={classes["main-image"]}>
      <img src={props.image} alt="campaign header" />
    </div>
  );
};

export default HeaderImg;
