import Card from "../UI/Card";
import classes from "./Quests.module.css";
import QuestItem from "./QuestItem/QuestItem";

const DUMMY_QUESTS = [
  {
    id: "c1.1",
    name: "Cold-Hearted Killer",
    description: "Finest fish and veggies",
    location: "Ten Towns",
  },
  {
    id: "c1.2",
    name: "Nature Spirits",
    description: "A german specialty!",
    location: "ten towns",
  },
  {
    id: "c1.3",
    name: "Lake Monster",
    description: "American, raw, meaty",
    location: "Bremen",
  },
  {
    id: "c1.4",
    name: "Foaming Mugs",
    description: "Healthy...and green...",
    location: "Bryn Shander",
  },
  {
    id: "c1.5",
    name: "Black Swords",
    description: "Healthy...and green...",
    location: "Caer-Dineval",
  },
  {
    id: "c1.6",
    name: "The Unseen",
    description: "Healthy...and green...",
    location: "Caer-Konig",
  },
  {
    id: "c1.7",
    name: "Holed Up",
    description: "Healthy...and green...",
    location: "Dougan's Hole",
  },
  {
    id: "c1.8",
    name: "Toil and Trouble",
    description: "Healthy...and green...",
    location: "Easthaven",
  },
  {
    id: "c1.9",
    name: "Town Hall Capers",
    description: "Healthy...and green...",
    location: "Easthaven",
  },
  {
    id: "c1.11",
    name: "The Mead Must Flow",
    description: "Healthy...and green...",
    location: "Good Mead",
  },
  {
    id: "c1.12",
    name: "The White Moose",
    description: "Healthy...and green...",
    location: "Lonelywood",
  },
  {
    id: "c1.13",
    name: "Mountain Climb",
    description: "Healthy...and green...",
    location: "Targos",
  },
  {
    id: "c1.14",
    name: "A Beautiful Mine",
    description: "Healthy...and green...",
    location: "Termaline",
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
    <section className={classes.quest}>
      <Card>
        <ul className={classes.quest}>{questList}</ul>
      </Card>
    </section>
  );
};
console.log(AvailableQuests());
export default AvailableQuests;
