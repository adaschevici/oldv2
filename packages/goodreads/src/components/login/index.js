import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doLogin } from './actions'

const { Login } = components

class DashboardLogin extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch } = this.props
    return <Login onLogin={() => dispatch(doLogin())} />
  }
}

function mapStateToProps(state) {
  const { meta, isLoading, error } = state.books.meta
  return { meta, isLoading, error }
}

export default connect(mapStateToProps)(DashboardLogin)
