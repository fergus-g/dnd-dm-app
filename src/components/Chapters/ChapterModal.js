import classes from "./ChapterModal.module.css";
import Modal from "../UI/Modal";

const ChapterModal = (props) => {
  const ChapterItems = (
    <ul className={classes["ChapterItem-item"]}>
      {[
        {
          id: "cpt1",
          name: "Chapter 1: Ten Towns",
        },
        {
          id: "cpt2",
          name: "Chapter 2: Icewind Dale",
        },
        {
          id: "cpt3",
          name: "Chapter 3: Sunblight",
        },
        {
          id: "cpt4",
          name: "Chapter 4: Destruction's Light",
        },
        {
          id: "cpt5",
          name: "Chapter 5: Auril's Abode",
        },
        {
          id: "cpt6",
          name: "Chapter 6: Caves of Hunger",
        },
        {
          id: "cpt7",
          name: "Chapter 7: Doom of Ythryn",
        },
      ].map((item) => (
        <div className={classes.actions}>
          {item.name}
          <button className={classes.button} onClick={props.onClick}>
            Select
          </button>
        </div>
      ))}
    </ul>
  );

  return (
    <Modal>
      {ChapterItems}
      <div className={classes.total}></div>
    </Modal>
  );
};

export default ChapterModal;
