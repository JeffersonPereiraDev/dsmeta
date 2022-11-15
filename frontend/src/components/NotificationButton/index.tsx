import icon from'../../assets/img/notification-icon.svg'
import './index.css'

function NotificatinoButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificatinoButton