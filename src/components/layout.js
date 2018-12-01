import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <div>
      {children}
      <ul>
          <li><Link to="/home/">Home</Link></li>
          <li><Link to="/about-us/">About Us</Link></li>
      </ul>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
