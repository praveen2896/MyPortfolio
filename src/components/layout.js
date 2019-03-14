/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Example from "../components/Navs"
import Header from "./header"
import NavbarPage1 from "../components/customNav"
import NavbarPage from "../components/New"
import "./layout.css"
import Scroll from "../components/scroll"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <NavbarPage />
        <div className="parallax" />
        <div
          className="lay"
          style={{
            margin: `0 auto`,
            maxWidth: "100%",
            // padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <div className="parallax" />
        <footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()},Copyright : Designed By{" "}
          <a href="https://www.gatsbyjs.org">Me</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
