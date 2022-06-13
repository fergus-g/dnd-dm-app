import classes from "./QuestItem.module.css";
import Button from "../../UI/Button.js";

const QuestItem = (props) => {
  return (
    <Button name={props.name}>
      <li className={classes.questItem}>
        <div>
          <h3>Quest: {props.name}</h3>
          <div className={classes.description}>
            Description:<br></br>
            {props.description}
          </div>
          <div className={classes.location}>Location:{props.location}</div>
        </div>
        <div></div>
      </li>
    </Button>
  );
};

export default QuestItem;
