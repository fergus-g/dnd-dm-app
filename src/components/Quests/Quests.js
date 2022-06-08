import Card from "../UI/Card";
import classes from "./Quests.module.css";
import QuestItem from "./QuestItem/QuestItem";
import { propTypes } from "react-bootstrap/esm/Image";

const DUMMY_QUESTS = [
  {
    id: "m1",
    name: "Hunt for Sephik",
    description: "Finest fish and veggies",
    location: "ten towns",
  },
  {
    id: "m2",
    name: "Chwinga sighting",
    description: "A german specialty!",
    location: "ten towns",
  },
  {
    id: "m3",
    name: "Whale light",
    description: "American, raw, meaty",
    location: "ten towns",
  },
  {
    id: "m4",
    name: "Pale Dragon",
    description: "Healthy...and green...",
    location: "ten towns",
  },
];

const AvailableQuests = () => {
  const questList = DUMMY_QUESTS.map((quest) => (
    <QuestItem
      key={quest.id}
      name={quest.name}
      description={quest.description}
      location={quest.location}
    />
  ));
  return (
    <section className={classes.quests}>
      <Card>
        <ul>{questList}</ul>
      </Card>
    </section>
  );
};

export default AvailableQuests;
