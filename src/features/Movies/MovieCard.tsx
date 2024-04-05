interface MovieCardProps {
  title: string;
  overview: string;
  popularity: number
}

export function MovieCard({title, overview, popularity}: MovieCardProps) {
  return (
    <div>
    <div>{title}</div>
    <div>{overview}</div>
    <div>{popularity}</div>
  </div>    
  )
}