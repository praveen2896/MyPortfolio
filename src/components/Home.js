import React from "react"
import Age from "../components/birth"
import Image5 from "../images/HTML2.png"
import Image3 from "../images/JavaImg.png"
import Image7 from "../images/Javascript.png"
import Image2 from "../images/Node1.png"
import Image1 from "../images/Reactimg.png"
import Image4 from "../images/spring_bot.png"
import "./Home.css"

const bigAvatar = {
  // margin: 10,
  width: 200,

  height: 200,
}

const Home = () => {
  return (
    <div>
      {/* <Grid container justify="center" alignItems="center">
        <img src={Image3} alt="Avatar" className="avatar" />
        <strong className="name">
          {" "}
          Hi I am PraveenKumar .<br />I Love Travelling and Building websites{" "}
          <br />
          <Age />
        </strong>
      </Grid> */}
      <div className="skillsavatar">
        <div container justify="center" alignItems="center">
          <img
            src={
              "https://images.unsplash.com/photo-1555139356-4c9b9f3f28a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"
            }
            alt="Avatar"
            className="bigavatar"
          />
        </div>
        <div container justify="center" alignItems="center" className="name">
          <strong>
            Hi I am PraveenKumar 😎 .<br />I Love Travelling 🏝️ and Building
            websites 👨‍💻 <br />
            <div>
              <span>
                {" "}
                <Age />
              </span>
            </div>
          </strong>
        </div>
      </div>
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
    </div>
  )
}

export default Home
