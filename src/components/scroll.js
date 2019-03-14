import React from "react"
import "./scroll.css"

const Scroll = () => (
  <div>
    <div className="parallax" />

    <div style={{ fontSize: "36px" }}>
      Scroll Up and Down this page to see the parallax scrolling effect. This
      div is just here to enable scrolling. Tip: Try to remove the
      background-attachment property to remove the scrolling effect.
    </div>
    <div className="parallax" />
  </div>
)
export default Scroll
