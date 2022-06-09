import { Fragment } from "react";
import Header from "./components/Layout/Header";
import CampaignSelector from "./components/Campaign/CampaignSelector";
import ChapterSelector from "./components/Chapters/ChapterSelector";
import AvailableQuests from "./components/Quests/Quests";
import CampaignItem from "./components/Campaign/CampaignItem";

function App() {
  return (
    <Fragment>
      {/* <CampaignItem /> */}
      <Header />
      <main>
        <CampaignSelector />
        <ChapterSelector />
        <AvailableQuests />
      </main>
    </Fragment>
  );
}

export default App;
