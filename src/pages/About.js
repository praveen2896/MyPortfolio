import React, { Component } from "react"
import Layout from "../components/layout"
import Profile from "../components/about"

export default class About1 extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>hi from about</h1>
          <Profile />
        </div>
      </Layout>
    )
  }
}
