import './ExploreTrending.css'

import TrendingList from '../TrendingList/TrendingList';

function ExploreTrending() {
  return(
    <div class="explore-trending" >
      <TrendingList data={trendingData}/>
      <TrendingList data={trendingData}/>
    </div>
  );
}

const trendingData = [
  {
    image: "img/trending1.jpg",
    name: "Sun-Glass",
    bid: "1.75",
    time: "07h 09m 12s"
  },
  {
    image: "img/trending2.jpg",
    name: "Sun-Glass",
    bid: "1.75",
    time: "07h 09m 12s"
  },
  {
    image: "img/trending3.jpg",
    name: "Sun-Glass",
    bid: "1.75",
    time: "07h 09m 12s"
  },
  {
    image: "img/trending4.jpg",
    name: "NuEvey",
    bid: "1.25",
    time: "07h 09m 12s"
  }
];


export default ExploreTrending;
