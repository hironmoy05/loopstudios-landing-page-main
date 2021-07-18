function Hamburger () {
  return (
    <>
      <input type="checkbox" id="navi-toggle" className="hamburger__checkbox" />
      <label htmlFor="navi-toggle" class="hamburger__button" >
        <span className="hamburger__icon">&nbsp;</span>
      </label>
      <div className="navigation-overlay"></div>
    </>
  )
}

export default Hamburger;