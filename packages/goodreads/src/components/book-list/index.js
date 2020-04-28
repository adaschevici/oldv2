import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchMeta } from './actions'
import { connect } from 'react-redux'

class BookList extends Component {
  static defaultProps = {
    fetchMeta: () => {},
  }
  static propTypes = {
    fetchMeta: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    return dispatch(fetchMeta())
  }

  render() {
    const { meta } = this.props
    console.log(meta)
    return <div>Simple component</div>
  }
}

function mapStateToProps(state) {
  const { meta, isLoading, error } = state.books.meta
  return { meta, isLoading, error }
}

export default connect(mapStateToProps)(BookList)
