import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doRegister } from './actions'

const { Register } = components

class DashboardRegister extends Component {
  static defaultProps = {
    onRegister: () => {},
  }
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  handleRegister = (username, password) => {
    const { dispatch } = this.props
    return dispatch(doRegister(username, password))
  }

  render() {
    return <Register onRegister={this.handleRegister} />
  }
}

function mapStateToProps(state) {
  const { isLoading, error } = state.app
  return { isLoading, error }
}

export default connect(mapStateToProps)(DashboardRegister)
