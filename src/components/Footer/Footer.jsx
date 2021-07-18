import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

function Footer () {
  return (
    <div className="primary-footer">
      <div className="container">
        <div className="primary-footer__inner">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
    </div>
  )
}

export default Footer;