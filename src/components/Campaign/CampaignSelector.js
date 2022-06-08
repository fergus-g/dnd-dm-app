import { Fragment, useState } from 'react';
import classes from './CampaignSelector.module.css'
import Dropdown from '../UI/Dropdown';



const CampaignSelector = (props) => {

    const [campaign, setCampaign] = useState();

    const dropdownHandler = (e) => {
        console.log(e);
        setCampaign(e);
    }
    return <Fragment>
    <section className={classes.campaign}>
        <h2>Welcome to the DM Helper!</h2>
        <div>
        <label>
      Please select what campaign you are running:
      </label>
    <Dropdown />
    </div>
    </section>
</Fragment>
}

export default CampaignSelector;