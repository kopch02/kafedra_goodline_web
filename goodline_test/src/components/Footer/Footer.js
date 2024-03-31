import './Footer.css'

function Footer() {
  return(
    <div class="footer">
      <div class="unit">
        <div class="footer__logo">
          <img src="img/footer-logo.svg" alt="logo" />
          <span>DiveSea</span>
        </div>
        <ul class="footer__menu">
          <li>Privacy Policy</li>
          <li>Term &#38; Conditions</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="footer__line"></div>
      <div class="footer__lower">
        <span>© 2023 EATLY All Rights Reserved</span>
        <ul class="footer__social">
          <img src="img/inst-logo.svg" alt="inst-logo"/>
          <img src="img/in-logo.svg" alt="in-logo"/>
          <img src="img/facebook-logo.svg" alt="facebook-logo"/>
          <img src="img/tweeter-logo.svg" alt="tweeter-logo"/>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
