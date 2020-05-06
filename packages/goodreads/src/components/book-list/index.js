import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import {
  fetchBooks,
  fetchBooksInProgress,
  startBook,
  stopBook,
} from './actions'

import { connect } from 'react-redux'
import { components, typography } from '@goodreads-v2/component-library'

const { BookGrid, BookCard } = components
const { Artifika, Body } = typography

class BookList extends Component {
  static defaultProps = {
    fetchBooks: () => {},
    books: [],
    images: [],
    booksInProgress: [],
  }
  static propTypes = {
    fetchBooks: PropTypes.func.isRequired,
  }

  componentDidUpdate = (prevProps) => {
    const { username: prevUsername } = prevProps
    const { dispatch, username } = this.props
    if (prevUsername !== username) {
      dispatch(fetchBooksInProgress(username))
    }
  }
  componentDidMount = () => {
    const { dispatch, authenticated, username } = this.props
    dispatch(fetchBooks())
    if (authenticated) {
      dispatch(fetchBooksInProgress(username))
    }
  }

  render() {
    const { meta, ratings, images, authenticated } = this.props
    const { booksInProgress } = this.props
    let progressData = []
    const booksCollection = meta.map((bookMeta, idx) => {
      const book = {
        ...bookMeta,
        ...ratings[idx],
        ...images[idx],
      }
      if (booksInProgress.includes(bookMeta.id)) progressData.push(book)
      return book
    })
    return (
      <Fragment>
        {authenticated && (
          <Fragment>
            <Artifika>Currently reading</Artifika>
            {progressData.length ? (
              <BookGrid>
                {progressData.map((book) => (
                  <BookCard
                    key={`${book.id}${book.title}`}
                    authenticated={authenticated}
                    onStopped={stopBook}
                    {...book}
                  />
                ))}
              </BookGrid>
            ) : (
              <div>
                <Body tag="h6">Nothing to show here...yet :(</Body>
              </div>
            )}
          </Fragment>
        )}
        <Artifika>Books</Artifika>
        <BookGrid>
          {booksCollection.map((book) => (
            <BookCard
              key={`${book.id}${book.title}`}
              authenticated={authenticated}
              onStarted={startBook}
              onStopped={stopBook}
              {...book}
            />
          ))}
        </BookGrid>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const {
    meta,
    images,
    ratings,
    isLoading,
    error,
    booksInProgress,
  } = state.books
  const { error: authError, username } = state.authStatus
  const authenticated = authError === null
  return {
    meta,
    images,
    ratings,
    isLoading,
    error,
    authenticated,
    username,
    booksInProgress,
  }
}

export default connect(mapStateToProps)(BookList)
