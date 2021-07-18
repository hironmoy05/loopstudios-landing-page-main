function Navigation (props) {
  const {navigation, footerNavigation} = props;
  return (
    <nav className={`${navigation} ${footerNavigation}`}>
      <ul className="navigation__list flow-content">
        <li className="navigation__item">
          <a href="#" className="navigation__link">About</a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">Careers</a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">Events</a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">Products</a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">Support</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;