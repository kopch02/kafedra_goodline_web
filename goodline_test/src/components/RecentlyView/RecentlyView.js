import './RecentlyView.css'


function RecentlyView({data}) {
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


export default RecentlyView;
