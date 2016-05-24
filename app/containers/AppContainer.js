import React, {Component, PropTypes} from 'react'
import App from '../components/App'

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const {qsort} = this.props.store.state
    const {quickSort} = this.props.store
    const props = {qsort, quickSort}
    return (
      <App {...props} />
    )
  }
}
