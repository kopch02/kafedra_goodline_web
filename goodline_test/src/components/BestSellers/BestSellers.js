import './BestSellers.css'

function BestSellers({data}) {
  return (
    <div class="best-sellers">
      <div class="best-sellers__top">
        <span class="best-sellers__name">Best Sellers</span>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <div class="best-sellers__list">
        {data.map((item, index) => (
          <li class="best-sellers__list-item">
              <div class="recently__icon">
                <img src={item.image} alt={'recently${index + 1}'} class="recently__item-img"/>
                <div class="best-sellers__list-item-number">
                  <span>{index + 1}</span>
                </div>
                <div class="recently__item-name">
                  <span class="recently__name-span1">{item.name}</span>
                  <span class="recently__name-span2">{item.username}</span>
                </div>
              </div>
              <button class="best-sellers__list-item-btn">Follow</button>
          </li>
        ))}
      </div>
    </div>
  );
}


export default BestSellers;
