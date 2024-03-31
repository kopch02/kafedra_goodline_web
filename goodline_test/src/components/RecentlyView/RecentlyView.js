import './RecentlyView.css'


function RecentlyView({data}) {
  return(
    <div class="recently__view">
      <div class="recently__top">
        <h3>Recent Viewed</h3>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <ul class="recently__list">
        {data.map((item, index) => (
          <li class="recently__list-item" key={index}>
            <div class="recently__icon">
              <img src={item.image} alt={'recently${index + 1}'} class="recently__item-img"/>
              <div class="recently__item-number">
                <span>{index + 1}</span>
              </div>
              <div class="recently__item-name">
                <span class="recently__name-span1">{item.name}</span>
                <span class="recently__name-span2">{item.username}</span>
              </div>
            </div>
            <div class="recently__item-price-container">
              <div class="recently__item-price">
                <img src="img/evirium.svg" alt="evirium-logo" class="efirium-logo"/>
                <span>{item.price}</span>
              </div>
              <span class="recently__item-procent" >{item.procent}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
);
}


export default RecentlyView;
