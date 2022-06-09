import classes from './CampaignItem.module.css'
import Modal from '../UI/Modal';

const CampaignItem = (props) => {
    const CampaignItems = <ul className={classes['CampaignItem-item']}>
    {[
    {
     id: 'icewind',
     name: 'Icewind Dale: Rime of the Frostmaiden', 
     }]
     .map(item => 
     <span>{item.name}</span>)}
     </ul>;

    return ( 
    <Modal>
        {CampaignItems}
        <div className={classes.total}>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
};

export default CampaignItem;