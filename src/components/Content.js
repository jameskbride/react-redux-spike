import React from 'react'

const Content = (props) => {

  const disableNav = () => {
    props.onDisableNav()
  }

  const enableNav = () => {
    props.onEnableNav()
  }

  return (
    <div className="column">
      <div><p>Learn React</p></div>
      <div><button id="enable-button" onClick={enableNav} >Enable Navigation</button></div>
      <div><button id="disable-button" onClick={disableNav} >Disable Navigation</button></div>
    </div>
  )
}

export default Content
