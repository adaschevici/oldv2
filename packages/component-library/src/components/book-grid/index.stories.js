import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import BookGrid from '.'

const books = []

storiesOf('Components|Elements.BookGrid', module)
  .addDecorator(withKnobs)
  .add('Book Grid for list', () => {
    return <BookGrid books={books} />
  })
