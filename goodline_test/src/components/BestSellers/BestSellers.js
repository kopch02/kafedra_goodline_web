import './BestSellers.css'

function BestSellers({data}) {
  return (
    <div class="best-sellers">
      <div class="best-sellers_top">
        <span class="best-sellers_name">Best Sellers</span>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <div class="best-sellers_list">
        {data.map((item, index) => (
          <li class="best-sellers_list-item">
              <div class="recently_icon">
                <img src={item.image} alt={'recently${index + 1}'} class="recently_item-img"/>
                <div class="best-sellers_list-item-number">
                  <span>{index + 1}</span>
                </div>
                <div class="recently_item-name">
                  <span class="recently_name-span1">{item.name}</span>
                  <span class="recently_name-span2">{item.username}</span>
                </div>
              </div>
              <button class="best-sellers_list-item-btn">Follow</button>
          </li>
        ))}
      </div>
    </div>
  );
}


export default BestSellers;
