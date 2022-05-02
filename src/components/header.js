import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="px-8 py-5">
    <nav className="flex justify-between">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="flex justify-between w-52">
        <li> About </li>
        <li> Work </li>
        <li> Contact </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
