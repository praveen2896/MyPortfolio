import Avatar from "@material-ui/core/Avatar"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"
import React from "react"

const styles = theme => ({
  card: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
})

function MediaControlCard(props) {
  const { classes, theme } = props

  return (
    <Card className={classes.card}>
      <Avatar
        alt="Remy Sharp"
        style={{ height: "200px", width: "200px" }}
        src="http://i68.tinypic.com/ei5f7k.jpg"
      />
      <CardMedia
        className={classes.cover}
        image="http://i68.tinypic.com/ei5f7k.jpg"
        title="Live from space album cover"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MediaControlCard)
