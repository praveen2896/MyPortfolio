import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
} from "mdbreact"
import React, { Component } from "react"
import "./contact1.css"

export default class Contact1 extends Component {
  render() {
    return (
      <div>
        <MDBCol className="contactdiv">
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Contact Me</MDBCardTitle>
              <MDBCardText>
                Hi 👋 ! , If you want to share anything , you can reach out me
                anytime ⌚ ,find my contact details below:
              </MDBCardText>
              <MDBCardText>📱 : +919566398589</MDBCardText>
              <MDBCardText>📧: mpraveenkumarown@gmail.com</MDBCardText>

              <MDBCardText>
                Note:
                <br />
                Soon i will update my Contact page like write feedback to me 🤟
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
