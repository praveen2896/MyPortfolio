import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Age from "../components/birth"
import Image5 from "../images/HTML2.png"
import Image3 from "../images/JavaImg.png"
import Image2 from "../images/Node2.png"
import Image1 from "../images/ReactImg.png"
import Image4 from "../images/download.png"
import Image6 from "../images/profile.jpg"
import Image7 from "../images/javascript.png"
import ModalPage from "../components/contact"
import Modal from "../components/modal"
import "./Home.css"

const bigAvatar = {
  // margin: 10,
  width: 200,
  height: 200,
}

const Home = () => {
  return (
    <div>
      {/* <div className="Maindiv">
        <div className="imagediv">
          <img
            src={Image6}
            alt="Avatar"
            style={{ height: "200px", width: "200px", borderRadius: "120px" }}
          />
        </div>
        <div className="details">
          <strong className="name">
            Hi I am PraveenKumar .<br />I Love Travelling and Building websites{" "}
            <br />
            <Age />
          </strong>
        </div>
      </div> */}
      <Grid container justify="center" alignItems="center">
        {/* <Avatar alt="Remy Sharp" src={Image6} style={bigAvatar} /> */}
        <img src={Image3} alt="Avatar" className="avatar" />
        <strong className="name">
          {" "}
          Hi I am PraveenKumar .<br />I Love Travelling and Building websites{" "}
          <br />
          <Age />
        </strong>
      </Grid>
      <Grid container justify="center" alignItems="center" />

      <div
        className="skills"
        style={{ color: "red", fontSize: "x-large", paddingTop: "25px" }}
      >
        My Skills
      </div>
      <div className="skillsavatar">
        <img src={Image3} alt="Avatar" className="avatar" />
        <img src={Image4} alt="Avatar" className="avatar" />
        <img src={Image7} alt="Avatar" className="avatar" />
        <img src={Image1} alt="Avatar" className="avatar" />
        <img src={Image2} alt="Avatar" className="avatar" />
        <img src={Image5} alt="Avatar" className="avatar" />
      </div>

      {/* <ModalPage />
      <Modal /> */}
    </div>
  )
}

export default Home
