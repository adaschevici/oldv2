import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import faker from 'faker'
import BookGrid from '.'

const books = (howMany = 10) => {
  let books = []
  faker.seed(1234)
  for (let i = 0; i < howMany; i++) {
    books.push({
      image: `https://picsum.photos/400/200?random=${i}`,
      title: `${faker.lorem.words(3)}`,
      description: `${faker.lorem.paragraph()}`,
    })
  }
  return books
}

storiesOf('Components|Elements.BookGrid', module)
  .addDecorator(withKnobs)
  .add('Book Grid for list', () => {
    return <BookGrid books={books()} />
  })
