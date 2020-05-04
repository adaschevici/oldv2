import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchMeta, fetchImages, fetchRatings } from './actions'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'

const { BookGrid } = components

class BookList extends Component {
  static defaultProps = {
    fetchMeta: () => {},
  }
  static propTypes = {
    fetchMeta: PropTypes.func.isRequired,
    fetchRatings: PropTypes.func.isRequired,
    fetchImages: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(fetchMeta())
    dispatch(fetchImages())
    dispatch(fetchRatings())
  }

  render() {
    const { meta, ratings, images, authenticated, username } = this.props
    const books = meta.map((bookMeta, idx) => ({
      ...bookMeta,
      ...ratings[idx],
      ...images[idx],
    }))
    console.log(authenticated, username)
    return (
      <BookGrid
        authenticated={authenticated}
        username={username}
        books={books}
      />
    )
  }
}

function mapStateToProps(state) {
  const { meta, images, ratings, isLoading, error } = state.books
  const { error: authError, username } = state.authStatus
  const authenticated = authError === null
  return { meta, images, ratings, isLoading, error, authenticated, username }
}

export default connect(mapStateToProps)(BookList)
