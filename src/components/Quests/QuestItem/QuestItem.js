import classes from "./QuestItem.module.css";

const QuestItem = (props) => {
  return (
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
  );
};

export default QuestItem;
