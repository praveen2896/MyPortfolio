import React, { Component } from "react"
import Image6 from "../images/profile.jpg"
import "./about.css"
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact"

export default class Profile extends Component {
  render() {
    return (
      <div className="topdiv" style={{ paddingTop: "50px" }}>
        <MDBCol className="div1">
          <MDBCard style={{ width: "22rem" }}>
            {/* <MDBCardImage
              className="img-fluid"
              src={Image6}
              style={{ height: "315px", width: "100%" }}
              waves
            /> */}
            <MDBCardBody>
              <MDBCardTitle>PraveenKumar</MDBCardTitle>
              <MDBCardText>
                Working as a Project Engineer in Wipro Technologies
              </MDBCardText>

              <ul className="list-inline text-right list-unstyled ulist">
                <li className="list-inline-item twitter">
                  <a
                    href="https://twitter.com/lucifierpraveen"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item Mail">
                  <a
                    href="mailto:mpraveenkumarown@gmail.com"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon icon="envelope" />
                  </a>
                </li>
                <li className="list-inline-item Github">
                  <a
                    href="http://github.com/praveen2896"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon fab icon="github" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="div2">
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardBody>
              <MDBCardTitle>PraveenKumar</MDBCardTitle>
              <MDBCardText>
                Hi 👋 ! I am Praveeen ,I love trying innovative idea via
                websites in freetime and as a professional i am trying to
                explore Spring 🌱 microservices
              </MDBCardText>
              <MDBCardText>
                I Am also a Traveller 🌲 as well as a Nature Lover 🏝️, More
                Recently i am addicted to React js as well as Gatsby js
              </MDBCardText>
              <MDBCardText>
                I am planning to start a Blog along with My new site
                iampraveen.netlify.com which is already you are in 😍
              </MDBCardText>

              <ul className="list-inline text-right list-unstyled ulist">
                <li className="list-inline-item twitter">
                  <a
                    href="https://twitter.com/lucifierpraveen"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item Mail">
                  <a
                    href="mailto:mpraveenkumarown@gmail.com"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon icon="envelope" />
                  </a>
                </li>
                <li className="list-inline-item Github">
                  <a
                    href="http://github.com/praveen2896"
                    target="_blank"
                    className="p-2 fa-lg w-ic"
                  >
                    <MDBIcon fab icon="github" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    )
  }
}
