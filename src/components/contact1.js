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
          <MDBCard className="cardstyle" style={{ width: "21rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Contact Me</MDBCardTitle>
              <MDBCardText>
                Hi 👋 ! , If you want to share anything , you can reach out me
                anytime ⌚ ,find my contact details below:
              </MDBCardText>
              <MDBCardText>📱 : +919566398589</MDBCardText>
              <MDBCardText>📧: mpraveenkumarown@gmail.com</MDBCardText>
              <MDBCardText>
                Moreover Contact me on social Media also except Facebook 😂
                <i class="fa fa-facebook-official" aria-hidden="true" />
              </MDBCardText>
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
