import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"
import Age from "../components/birth"
import Image5 from "../images/HTML2.png"
import Image3 from "../images/JavaImg.png"
import Image2 from "../images/Node2.png"
import Image1 from "../images/ReactImg.png"
import Image4 from "../images/download.png"
import Image6 from "../images/profile.jpg"
import Image7 from "../images/javascript.png"
import "./Newhome.css"

const bigAvatar = {
  // margin: 10,
  width: 200,
  height: 200,
}
const Newhome = props => {
  const { classes } = props
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={Image6}
          className="bigavatar"
          style={bigAvatar}
        />
      </Grid>

      <Grid container justify="center" alignItems="center">
        <Avatar className="avatar" alt="Remy Sharp" src={Image6} />
        <Avatar className="bigavatar" alt="Remy Sharp" src={Image6} />
        <Avatar className="bigavatar" alt="Remy Sharp" src={Image6} />
        <Avatar className="bigavatar" alt="Remy Sharp" src={Image6} />
        <Avatar className="bigavatar" alt="Remy Sharp" src={Image6} />
      </Grid>
    </div>
  )
}

export default Newhome
