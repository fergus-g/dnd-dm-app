import classes from "./ChapterSelector.module.css";
import Button from "../UI/Button";

const ChapterSelector = (props) => {
  return (
    <section className={classes.chapter}>
      <div>
        <label>Choose your chapter:</label>
        <div>
          <Button name="Choose Chapter" onClick={props.onClick} />
        </div>
      </div>
    </section>
  );
};

export default ChapterSelector;
