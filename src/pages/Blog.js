import React, { Component } from "react"
import Layout from "../components/layout"

export default class Blogs extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1
            style={{ textAlign: "center", color: "white", paddingTop: "50px" }}
          >
            Coming Soon <i class="fa fa-rss" aria-hidden="true" />
          </h1>
        </div>
      </Layout>
    )
  }
}
