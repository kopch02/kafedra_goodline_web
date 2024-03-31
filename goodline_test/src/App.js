import './App.css';
import './css/notification.css';
import './css/recently_view.css';
import './css/best_sellers.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Recently_view data={data} />
        <Best_sellers data={sellers_data}/>
        <Notification />
      </main>
    </div>
  );
}

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

const data = [
  {
    image: "img/recently1.jpg",
    name: "Alex Ca.",
    username: "Alexy",
    price: "8,456",
    procent: "+23,00%"
  },
  {
    image: "img/recently2.jpg",
    name: "Juliya S.",
    username: "JuliyaS",
    price: "5,327",
    procent: "-32,01%"
  }
];

function Recently_view({data}) {
  return(
    <div class="recently-view">
      <div class="recently-top">
        <h3>Recent Viewed</h3>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <ul class="recently-list">
        {data.map((item, index) => (
          <li class="recently-item" key={index}>
            <div class="recently-icon">
              <img src={item.image} alt={'recently${index + 1}'} class="recently-item-img"/>
              <div class="recently-item-number">
                <span>{index + 1}</span>
              </div>
              <div class="recently-item-name">
                <span class="recently-name-span1">{item.name}</span>
                <span class="recently-name-span2">{item.username}</span>
              </div>
            </div>
            <div class="recently-item-price-container">
              <div class="recently-item-price">
                <img src="img/evirium.svg" alt="evirium-logo" class="efirium-logo"/>
                <span>{item.price}</span>
              </div>
              <span class="recently-item-procent" >{item.procent}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
);
}

const sellers_data = [
  {
    image: "img/recently1.jpg",
    name: "Alex Ca.",
    username: "@Alexy"
  },
  {
    image: "img/sellers2.jpg",
    name: "Jailyn Sa.",
    username: "@JuliyaS"
  },
  {
    image: "img/sellers3.jpg",
    name: "Jailyn Sa.",
    username: "@JuliyaS"
  },
  {
    image: "img/sellers4.jpg",
    name: "Trevor Pu.",
    username: "@TrevorP"
  },
  {
    image: "img/sellers5.jpg",
    name: "Trevor Pu.",
    username: "@TrevorP"
  },
  {
    image: "img/sellers6.jpg",
    name: "Trevor Pu.",
    username: "@TrevorP"
  }
];


function Best_sellers({data}) {
  return (
    <div class="best-sellers">
      <div class="best-sellers-top">
        <span class="best-sellers-name">Best Sellers</span>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <div class="best-sellers-list">
        {data.map((item, index) => (
          <li class="best-sellers-item">
              <div class="recently-icon">
                <img src={item.image} alt={'recently${index + 1}'} class="recently-item-img"/>
                <div class="best-sellers-item-number">
                  <span>{index + 1}</span>
                </div>
                <div class="recently-item-name">
                  <span class="recently-name-span1">{item.name}</span>
                  <span class="recently-name-span2">{item.username}</span>
                </div>
              </div>
              <button class="best-sellers-item-btn">Follow</button>
          </li>
        ))}
      </div>
    </div>
  );
}


export default App;
