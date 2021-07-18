import facebook from "../../../images/icon-facebook.svg";
import twitter from "../../../images/icon-twitter.svg";
import pinterest from "../../../images/icon-pinterest.svg";
import instagram from "../../../images/icon-instagram.svg";

function FooterRight () {
  return (
    <div className="footer-right flow-content mt-m">
      <div className="footer-brands__icons">
        <ul className="footer-brands__list">
          <li className="footer-brands__item">
            <a href="#" className="footer-brands__link">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li className="footer-brands__item">
            <a href="#" className="footer-brands__link">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li className="footer-brands__item">
            <a href="#" className="footer-brands__link">
              <img src={pinterest} alt="" />
            </a>
          </li>
          <li className="footer-brands__item">
            <a href="#" className="footer-brands__link">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="rights">
        <p>&copy; 2021 Loopstudios. All rights reserved</p>
      </div>
    </div>
  )
}

export default FooterRight;