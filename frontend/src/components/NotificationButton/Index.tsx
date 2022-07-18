import buttonIcon from '../../assets/img/notification-icon.svg';
import './styles.css';

import { BASE_URL } from './../../utils/request';
import axios from 'axios';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/Sales/${id}/Notification`)
        .then(response =>{
            console.log("Sucesso")
            console.log(id)
        })
}

function NotificationButton({ saleId }: Props) {
    return (

        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={buttonIcon} alt="Notificar" />
        </div>


    )
}

export default NotificationButton;
