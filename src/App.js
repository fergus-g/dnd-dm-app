import { Fragment } from 'react';
import Header from './components/Layout/Header';
import CampaignSelector from './components/Campaign/CampaignSelector';
import ChapterSelector from './components/Campaign/ChapterSelector';

function App() {
  return (
   <Fragment>
     <Header />
     <main>
       <CampaignSelector />
       <ChapterSelector />
     </main>
   </Fragment>
  );
}

export default App;
