import { Tiles } from '@rebass/layout'
import BookCard from '../card'

export default ({ books }) => (
  <Tiles columns={[1, 2, 2, 4, 6, 8]}>
    {books.map(book => (
      <BookCard {...book} />
    ))}
  </Tiles>
)
