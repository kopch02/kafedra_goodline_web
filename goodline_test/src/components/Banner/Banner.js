import './Banner.css'

function Banner() {
  return (
    <div class="container banner">
      <div class="banner__left-content">
        <h2>Create and Sell NFTs</h2>
        <p>World’s Largest NFT Place</p>
        <div class="banner__action">
          <button class="more">Explore More</button>
          <button class="sell">Sell Artwork</button>
        </div>
      </div>
      <div class="banner__img">
        <img src="img/banner1.jpg" alt="banner1" class="banner__banner1"/>
        <img src="img/banner2.jpg" alt="banner2-blure" class="banner__banner2-blure"/>
      </div>
    </div>
  );
}

export default Banner;
