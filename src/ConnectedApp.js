import {connect} from 'react-redux'

import App from './App'

const mapStateToProps = state => {
  return {
    backEnabled: state.navigation.backEnabled,
    forwardEnabled: state.navigation.forwardEnabled
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
