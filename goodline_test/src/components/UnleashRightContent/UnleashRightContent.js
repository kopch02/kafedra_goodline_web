import './UnleashRightContent.css'
import Notification from '../notification/Notification';
import RecentlyView from '../RecentlyView/RecentlyView';
import BestSellers from '../BestSellers/BestSellers';

function UnleashRightContent() {
  return (
    <div class="unleash-right-content">
              <RecentlyView data={data} />
              <BestSellers data={sellers_data}/>
              <Notification />
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




export default UnleashRightContent;

