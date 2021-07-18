import Logo from "../../Header/Logo/Logo";
import Navigation from "../../Header/Navigation/Navigation";

function FooterLeft () {
  return (
    <div className="footer-left flow-content">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-navigation">
        <Navigation footerNavigation={"footerNavigation"} />
      </div>
    </div>
  )
}

export default FooterLeft;