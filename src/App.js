import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import CampaignSelector from "./components/Campaign/CampaignSelector";
import ChapterSelector from "./components/Chapters/ChapterSelector";
import AvailableQuests from "./components/Quests/Quests";
import CampaignItem from "./components/Campaign/CampaignItem";

function App() {
  // MODAL DISPLAY FOR CAMPAIGN CHOICE
  const [campaignModal, setCampaignModal] = useState(false);

  const showCampaignModal = () => {
    setCampaignModal(true);
  };

  const hideCampaignModal = () => {
    setCampaignModal(false);
  };
  //CAMPAIGN SELECTOR UI ELEMENT
  const [campaignSelector, setCampaignSelector] = useState(true);

  const showCampaignSelector = () => {
    setCampaignSelector(true);
  };

  const hideCampaignSelector = () => {
    setCampaignSelector(false);
  };
  //CHAPTER SELECTOR UI ELEMENT
  const [chapterSelector, setChapterSelector] = useState(false);

  const showChapterSelector = () => {
    setChapterSelector(true);
  };

  const hideChapterSelector = () => {
    setChapterSelector(false);
  };
  //MODAL DISPLAY FOR CHAPTER
  const [chapterModal, setChapterModal] = useState(false);

  const showChapterModal = () => {
    setChapterModal(true);
  };

  const hideChapterModal = () => {
    setChapterModal(false);
  };

  //QUEST UI
  const [questSelector, setQuestSelector] = useState(false);

  const showQuestSelector = () => {
    setChapterModal(true);
  };

  const hideQuestSelector = () => {
    setChapterModal(false);
  };

  return (
    <Fragment>
      {campaignModal && <CampaignItem onClickModal={hideCampaignModal} />}
      <Header />
      <main>
        {campaignSelector && <CampaignSelector />}
        {chapterSelector && (
          <ChapterSelector onClickModal={showChapterSelector} />
        )}
        {questSelector && <AvailableQuests />}
      </main>
    </Fragment>
  );
}

export default App;
