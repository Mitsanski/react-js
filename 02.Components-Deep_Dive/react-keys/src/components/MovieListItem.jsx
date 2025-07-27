export default function MovieListItem({movie}) {
    return (
        <>
          <li key={movie.id}>{movie.title}</li>
        </>
    )
}