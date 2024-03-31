import './TrendingItem.css'

function TrendingItem({item}) {
  return (
    <li class="trending-item">
      <div class="trending-item__image-container">
        <img src={item.image} alt="trending1" class="tranding-item__main-img"/>
        <div class="trending-item__time">
          <span>{item.time}</span>
        </div>
      </div>
      <span class="trending-item__main">{item.name}</span>
      <div class="trending-item__side">
        <div class="trending-item__side-text">
          <span >Current bid</span>
          <div class="trending-item__price">
            <img src="img/evirium.svg" alt="evirium-logo"/>
            <span>{item.bid}</span>
          </div>
        </div>
        <button class="bit-btn">PLACE BID</button>
      </div>
    </li>
  );
}

export default TrendingItem;

