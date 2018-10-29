import React, {Component} from 'react'

class NavButton extends Component {

  render() {
    const {text} = this.props
    const textColor = !!this.props.enabled ? "black" : "gray"

    return (
      <div className="column"><p style={{color: textColor}}>{text}</p></div>
    )
  }
}

export default NavButton
