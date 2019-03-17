import React, { Component } from "react"

const defaultstate = {
  profilename: "PraveenKumar",
  changeName: () => {},
}

export const MyContext = React.createContext(defaultstate)

export default class MyProvider extends Component {
  state = {
    profilename: "PraveenKumar",
  }
  changeName = name => {
    let profilename = name
    this.setState({ profilename })
  }

  render() {
    const { children } = this.props
    const { profilename } = this.state
    return (
      <MyContext.Provider
        value={{
          profilename,
          changeName: this.changeName,
        }}
      >
        {children}
      </MyContext.Provider>
    )
  }
}
