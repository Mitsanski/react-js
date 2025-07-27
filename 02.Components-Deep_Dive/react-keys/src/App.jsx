import { useState } from "react";
import "./App.css";
import MovieListItem from "./components/MovieListItem";

export default function App() {
    const [movies, setMovies] = useState([
        { id: 1, title: "The Matrix" },
        { id: 2, title: "Man of Steel" },
        { id: 3, title: "Dune" },
        { id: 4, title: "Spiderman" },
        { id: 5, title: "Oppenheimer" },
        { id: 6, title: "Constantine" },
        { id: 7, title: "Lord of the Rings" }]);

    const removeFirstHandler = () => {
        movies.shift();
        setMovies([...movies]);
    };
    return (
        <>
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => <MovieListItem movie={movie} />)}
            </ul>

            <button onClick={removeFirstHandler}>Remove First</button>
        </>
    );
}

