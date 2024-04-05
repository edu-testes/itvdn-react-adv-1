import { Movie } from "../../reducers/movies"

interface MoviesProps {
  movies:  Movie[]
}

export function Movies({movies}: MoviesProps) {
  return (
    <div>
      <p>Movies</p>
    </div>
  )
}