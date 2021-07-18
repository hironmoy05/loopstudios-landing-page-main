import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import Hamburger from './Hamburger/Hamburger';

function Header () {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="primary-header__inner">
          <div className="logo flex">
            <Logo />
            <Hamburger />
            <Navigation navigation="navigation" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;