import React, { Component } from "react"
import Layout from "../components/layout"
import MediaCard from "../components/About"

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
