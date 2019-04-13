import React, { Component } from "react"
import MediaCard from "../components/about"
import Layout from "../components/layout"

export default class About1 extends Component {
  render() {
    return (
      <Layout>
        <div>
          {/* <Profile /> */}
          <MediaCard />
        </div>
      </Layout>
    )
  }
}
