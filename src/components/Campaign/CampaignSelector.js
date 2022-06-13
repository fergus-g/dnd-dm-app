import { Fragment } from "react";
import classes from "./CampaignSelector.module.css";
import Button from "../UI/Button";

const CampaignSelector = (props) => {
  return (
    <Fragment>
      <section className={classes.campaign}>
        <h2>Welcome to the DM Helper!</h2>
        <div>
          <label>Please select what campaign you are running:</label>
          <div>
            <Button onClick={props.onClick} name="Choose Campaign" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CampaignSelector;
