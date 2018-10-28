import React, { Component } from 'react'

import Content from './components/Content'
import NavButton from './components/NavButton'

class App extends Component {
  render() {
    return (
      <div>
        <NavButton text="Back" />
        <Content/>
        <NavButton text="Forward" />
      </div>
    );
  }
}

export default App;
