import { Fragment } from "react";
import Header from "./components/Layout/Header";
import CampaignSelector from "./components/Campaign/CampaignSelector";
import ChapterSelector from "./components/Campaign/ChapterSelector";
import AvailableQuests from "./components/Quests/Quests";

function App() {
  return (
    <Fragment>
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
