import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"


class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showNav: false,
    }
  }

  handleClick(e) {
    this.setState({
      showNav: !this.state.showNav,
    })
  }

  render() {
    return (

      <header className="row light-section navbar-light sticky-top">
        <div className="container">
          <div className="row">
            <Link to="/" className="col navbar-brand pb-0 font-weight-bold">
              Kauplusrattapood
            </Link>
            <div
              onClick={this.handleClick.bind(this)}
              className={this.state.showNav ? "active hamburger" : "hamburger"}
            >
              <div className="hamburger-icon"></div>
            </div>

            <nav
              className={this.state.showNav ? "show-nav col" : "col nav-wrap"}
            >
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link
                    onClick={this.handleClick.bind(this)}
                    className="nav-link"
                    to="/"
                  >
                    Pealeht
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={this.handleClick.bind(this)}
                    className="nav-link"
                    to="/meist/"
                  >
                    Meist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={this.handleClick.bind(this)}
                    className="nav-link"
                    to="/hinnakiri/"
                  >
                    Hinnakiri
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    onClick={this.handleClick.bind(this)}
                    className="nav-link"
                    to="/kontakt/"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    )
  }
}

export default Header

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
