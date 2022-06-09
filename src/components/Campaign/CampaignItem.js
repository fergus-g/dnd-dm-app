import classes from './CampaignItem.module.css'
import Modal from '../UI/Modal';

const CampaignItem = (props) => {
    const CampaignItems = <ul className={classes['CampaignItem-item']}>
    {[
    {
     id: 'icewind',
     name: 'Icewind Dale: Rime of the Frostmaiden', 
     },
     {
     id: 'curse',
     name: 'Curse of Strahd', 
     },
     {
     id: 'waterdeep',
     name: 'Waterdeep: Dragon Heist', 
     }]
     .map(item => 
      <div className={classes.actions}>
      {item.name}
            <button className={classes.button} onClick={props.onClickModal}>Select</button>
        </div>
    )}  
     </ul>;

    return ( 
    <Modal >
        {CampaignItems}
        <div className={classes.total}>
        </div>
      
    </Modal>
    )
};

export default CampaignItem;