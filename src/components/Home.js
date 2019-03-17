import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import React from "react"
import Age from "../components/birth"
import Image5 from "../images/HtmlImg.png"
import Image3 from "../images/JavaImg.png"
import Image2 from "../images/Node1Img.png"
import Image1 from "../images/ReactImg.png"
import Image4 from "../images/spring-boot.png"
import "./Home.css"

const bigAvatar = {
  // margin: 10,
  width: 200,
  height: 200,
}

const Home = () => {
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          style={bigAvatar}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <strong className="name">
          {" "}
          Hi I am PraveenKumar .<br />I Love Travelling and Building websites{" "}
          <br />
          <Age />
        </strong>
      </Grid>
      <div
        className="skills-description"
        style={{ color: "aqua", paddingTop: "25px" }}
      >
        My Skills
      </div>
      <Grid container justify="left" alignItems="center">
        <Avatar alt="Remy Sharp" src={Image1} style={bigAvatar} />
        <Avatar alt="Remy Sharp" src={Image2} style={bigAvatar} />
        <Avatar alt="Remy Sharp" src={Image3} style={bigAvatar} />
        <Avatar alt="Remy Sharp" src={Image4} style={bigAvatar} />
        <Avatar
          alt="Remy Sharp"
          style={({ marginLeft: "30px" }, bigAvatar)}
          src={Image5}
        />
        {/* <div className="movie-card">
          <div
            className="skills-image"
            style={{
              backgroundImage: `url(${Image1})`,
            }}
          />
          <div className="skills-description" style={{ color: "aqua" }}>
            React Js
          </div>
        </div> */}
      </Grid>
    </div>
  )
}

export default Home
