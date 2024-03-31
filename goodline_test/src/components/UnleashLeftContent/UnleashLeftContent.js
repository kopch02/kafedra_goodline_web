import './UnleashLeftContent.css'
import './ExploreMoreBtn.css'

function UnleashLeftContent() {
  return (
<div class="unleash-left-content">
    <span>Just Unleash -</span>
    <span>Your Inner Collector</span>
    <ul class="unleash-list">
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>Best Seller All Around World</span>
      </li>
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>$2M+ Transections Every Day</span>
      </li>
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>Secure Transactions</span>
      </li>
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>Exclusive Collections From Sellers</span>
      </li>
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>Easy Buying and Selling</span>
      </li>
      <li class="unleash-list-item">
        <img src="img/chek.svg" alt="check"/>
        <span>Join Our Community</span>
      </li>
    </ul>
    <button class="explore-more-btn">
      <span>Explore More</span>
      <img src="img/arrow-explore.svg" alt="arrow"/>
    </button>
    </div>
  );
}

export default UnleashLeftContent;

