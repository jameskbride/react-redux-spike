import Content from './Content'
import {connect} from 'react-redux'

import {enableNavigation, disableNavigation} from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    onDisableNav: () => {
      dispatch(disableNavigation())
    },
    onEnableNav: () => {
      dispatch(enableNavigation())
    }
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Content)
