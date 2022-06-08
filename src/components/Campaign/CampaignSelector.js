import { Fragment, useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import classes from './CampaignSelector.module.css'



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
        <DropdownButton
        title="Dropdown right"
        id="dropdown-menu-align-right"
        onSelect={dropdownHandler}
        >
              <Dropdown.Item eventKey="default"></Dropdown.Item>
              <Dropdown.Item eventKey="icewind">Icewind Dale: Rime of the Frost Maiden</Dropdown.Item>
              <Dropdown.Item eventKey="strahd">Curse of Strahd</Dropdown.Item>
              <Dropdown.Item eventKey="waterdeep">Waterdeep: Dragon Heist</Dropdown.Item>
      </DropdownButton>
      {/* <div className={classes.dropdown}>
        <select onSelect={dropdownHandler} className={classes.dropbtn}>
          <option value="default"></option>
          <option value="icewind">Icewind Dale: Rime of the Frost Maiden</option>
          <option value="strahd">Curse of Strahd</option>
          <option value="waterdeep">Waterdeep: Dragon Heist</option>
        </select>  
     </div>     */}
    </div>
    </section>
</Fragment>
}

export default CampaignSelector;