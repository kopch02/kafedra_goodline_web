import './TrendingList.css'

import TrendingItem from '../TrendingItem/TrendingItem';

function TrendingList({data}) {
  return (
    <ul class="trending-list">
      {data.map((item, index) => (
        <TrendingItem item={item} />
      ))}
    </ul>
  );
}

export default TrendingList;
