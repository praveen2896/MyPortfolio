import React, { Component } from "react"
import Layout from "../components/layout"
import Profile from "../components/about"

export default class About1 extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Profile />
        </div>
      </Layout>
    )
  }
}
