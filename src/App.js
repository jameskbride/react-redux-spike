import React, { Component } from 'react'

import Content from './components/NavHandler'
import NavButton from './components/NavButton'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavButton enabled={this.props.backEnabled} className="column" text="Back" />
        <Content className="column" />
        <NavButton enabled={this.props.forwardEnabled} className="column" text="Forward" />
      </div>
    );
  }
}

export default App;
