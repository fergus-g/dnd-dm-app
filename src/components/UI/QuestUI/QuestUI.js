import { Fragment } from "react";
import Card from "../Card";
import classes from "./QuestUI.module.css";

const QuestUI = () => {
  return (
    <Card>
      <div className={classes.questUI}>
        <Card className={classes.card}>
          <div className={classes.heading}>
            <h1>Story Hooks</h1>
          </div>
        </Card>
        <Card>
          <div className={classes.heading}>
            <h1>Descriptions</h1>
          </div>
        </Card>
        <Card>
          <div className={classes.heading}>
            <h1>Key NPCs</h1>
          </div>
        </Card>
        <Card>
          <div className={classes.heading}>
            <h1>Monsters</h1>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default QuestUI;
