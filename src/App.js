import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import CampaignSelector from "./components/Campaign/CampaignSelector";
import ChapterSelector from "./components/Chapters/ChapterSelector";
import AvailableQuests from "./components/Quests/Quests";
import CampaignItem from "./components/Campaign/CampaignItem";
import ChapterModal from "./components/Chapters/ChapterModal";
import QuestUI from "./components/UI/QuestUI/QuestUI";
import { CampaignContext } from "./components/CampaignContext/CampaignContext";

function App() {
  // MODAL DISPLAY FOR CAMPAIGN CHOICE
  const [campaignModal, setCampaignModal] = useState(false);

  const showCampaignModal = () => {
    setCampaignModal(true);
  };

  //CAMPAIGN SELECTOR UI ELEMENT
  const [campaignSelector, setCampaignSelector] = useState(false);

  const hideCampaignSelector = () => {
    setCampaignSelector(false);
  };
  //CHAPTER SELECTOR UI ELEMENT
  const [chapterSelector, setChapterSelector] = useState(false);

  //MODAL DISPLAY FOR CHAPTER
  const [chapterModal, setChapterModal] = useState(false);

  const showChapterModal = () => {
    setChapterModal(true);
  };

  //QUEST UI
  const [questSelector, setQuestSelector] = useState(false);

  const chapterHandler = () => {
    setCampaignModal(false);
    setChapterSelector(true);
    setCampaignSelector(false);
  };

  const questHandler = () => {
    setChapterModal(false);
    setChapterSelector(false);
    setQuestSelector(true);
  };

  const headerButtonHandler = () => {
    showChapterModal(true);
    hideCampaignSelector(false);
  };

  return (
    <CampaignContext.Provider value="icewind">
      {campaignModal && <CampaignItem onClick={chapterHandler} />}
      {chapterModal && <ChapterModal onClick={questHandler} />}
      <Header onClick={headerButtonHandler} />
      <main>
        {campaignSelector && <CampaignSelector onClick={showCampaignModal} />}
        {chapterSelector && <ChapterSelector onClick={showChapterModal} />}
        {questSelector && <AvailableQuests />}
        <QuestUI />
      </main>
    </CampaignContext.Provider>
  );
}

export default App;
