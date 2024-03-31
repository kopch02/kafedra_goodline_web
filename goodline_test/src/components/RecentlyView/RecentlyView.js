import './RecentlyView.css'


function RecentlyView({data}) {
  return(
    <div class="recently_view">
      <div class="recently_top">
        <h3>Recent Viewed</h3>
        <img src="img/dots-mini.svg" alt="dots"/>
      </div>
      <ul class="recently_list">
        {data.map((item, index) => (
          <li class="recently_list-item" key={index}>
            <div class="recently_icon">
              <img src={item.image} alt={'recently${index + 1}'} class="recently_item-img"/>
              <div class="recently_item-number">
                <span>{index + 1}</span>
              </div>
              <div class="recently_item-name">
                <span class="recently_name-span1">{item.name}</span>
                <span class="recently_name-span2">{item.username}</span>
              </div>
            </div>
            <div class="recently_item-price-container">
              <div class="recently_item-price">
                <img src="img/evirium.svg" alt="evirium-logo" class="efirium-logo"/>
                <span>{item.price}</span>
              </div>
              <span class="recently_item-procent" >{item.procent}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
);
}


export default RecentlyView;
