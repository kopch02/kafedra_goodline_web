import './BestSellers.css'

function BestSellers({data}) {
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


export default BestSellers;
