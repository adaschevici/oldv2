import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'
import { doRegister } from './actions'

const { Register } = components

class DashboardRegister extends Component {
  static propTypes = {
    onRegister: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch } = this.props
    return (
      <Register
        onRegsiter={(username, password) =>
          dispatch(doRegister(username, password))
        }
      />
    )
  }
}

function mapStateToProps(state) {
  const { isLoading, error } = state.app
  return { isLoading, error }
}

export default connect(mapStateToProps)(DashboardRegister)
