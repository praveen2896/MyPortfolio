import React from "react"
import Age from "../components/birth"
import Image5 from "../images/HTML2.png"
import Image3 from "../images/JavaImg.png"
import Image7 from "../images/javascript.png"
import Image2 from "../images/node1.png"
import Image1 from "../images/ReactImg.png"
import Image4 from "../images/spring_bot.png"
import Image6 from "../images/profile.jpg"
import "./Home.css"

const bigAvatar = {
  // margin: 10,
  width: 200,

  height: 200,
}

const Home = () => {
  return (
    <div>
      <div className="skillsavatar">
        <div container justify="center" alignItems="center">
          <img src={Image6} alt="Avatar" className="bigavatar" />
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
