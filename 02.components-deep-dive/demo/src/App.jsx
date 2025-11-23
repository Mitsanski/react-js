import { useState } from 'react'
import './App.css'
import MovieListItem from './components/MovieListItem'

function App() {
    const [movies, setMovies] = useState([
        { id: 1, name: "Interstellar" },
        { id: 2, name: "The Dark Knight" },
        { id: 3, name: "Inception" },
        { id: 4, name: "Blade Runner 2049" },
        { id: 5, name: "Whiplash" }
    ])

    const removeFirstHandler = () => {
        setMovies(movies.slice(1))
    }
    return (
        <>
            <h2>Movie Catalog</h2>
            <ul>
                {movies.length > 0 ? movies.map(movie => <MovieListItem movie={movie} key={movie.id} />) : <li>No Movies yet</li>}
            </ul>

            <button onClick={removeFirstHandler}>Delete First Movie</button>
        </>
    )
}

export default App
