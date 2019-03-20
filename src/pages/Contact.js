import React, { Component } from "react"
import Contact1 from "../components/contact1"
import Layout from "../components/layout"

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div>
          {/* <div
            className="container"
            style={{
              padding: "100px",
              fontSize: "x-large",
              fontStyle: "oblique",
              fontWeight: "500",
            }}
          >
            Mail Id : mpraveenKumarown@gmail.com
            <br />
            Phone : 9566398589
            <br />
            Alternate : 7010325109
            <br />
          </div> */}
          <Contact1 />
        </div>
      </Layout>
    )
  }
}
