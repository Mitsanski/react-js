export default function MovieListItem(props) {
    const movie = props.movie;
    return (
        <>
            <article>
                <h4>{movie.name}</h4>
                <p>Year: {movie.year}</p>
                <p>Genre: {movie.genres.join(', ')}</p>
                <p>Director: {movie.director}</p>
                <p>Plot: {movie.plot}</p>
                <img src={movie.posterUrl} alt={movie.name} />
            </article>
            <hr />
        </>
    )
}