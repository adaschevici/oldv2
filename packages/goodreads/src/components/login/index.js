import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doLogin } from './actions'

const { Login } = components

class DashboardLogin extends Component {
  static defaultProps = {
    onLogin: () => {},
  }
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  handleLogin = (email, password) => {
    const { dispatch } = this.props
    return dispatch(doLogin(email, password))
  }

  render() {
    return <Login onLogin={this.handleLogin} />
  }
}

function mapStateToProps(state) {
  const { meta, isLoading, error } = state.books.meta
  return { meta, isLoading, error }
}

export default connect(mapStateToProps)(DashboardLogin)
