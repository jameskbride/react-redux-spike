import React, {Component} from 'react'

class NavButton extends Component {

  render() {
    const {text} = this.props

    return (
      <div><p>{text}</p></div>
    )
  }
}

export default NavButton
