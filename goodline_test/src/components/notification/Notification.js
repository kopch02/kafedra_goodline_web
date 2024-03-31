import './Notification.css';


function Notification() {
  return(
    <div class="unleash-notification">
      <div class="unleash-notification-info">
        <div class="unleash-notification-info-logo">
          <img src="./img/point.svg" alt="point"/>
          <div class="unleash-notification-avatar">
            <img src="./img/notofication-avatar.jpg" alt="avatar" class="unleash-notification-avatar-img"/>
            <img src='./img/verified.svg' alt="verified" class="unleash-notification-avatar-verified"/>
          </div>
        </div>
        <div class="unleash-notification-info-text">
          <div class="unleash-notification-info-name">
            <span >New bid</span>
            <span >Rotation</span>
          </div>
            <span>0.002 ETH</span>
            <span>6 Oct 2022, 11:44 PM</span>
        </div>
      </div>
      <img src="./img/notofication-logo.jpg" alt="notofication-logo" class="unleash-notification-logo"/>
    </div>
  );
}

export default Notification;

