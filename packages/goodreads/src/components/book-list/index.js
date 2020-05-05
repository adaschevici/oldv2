import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchBooks } from './actions'
import { connect } from 'react-redux'
import { components } from '@goodreads-v2/component-library'

const { BookGrid } = components

class BookList extends Component {
  static defaultProps = {
    fetchBooks: () => {},
  }
  static propTypes = {
    fetchBooks: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(fetchBooks())
  }

  render() {
    const { meta, ratings, images, authenticated, username } = this.props
    const books = meta.map((bookMeta, idx) => ({
      ...bookMeta,
      ...ratings[idx],
      ...images[idx],
    }))
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
