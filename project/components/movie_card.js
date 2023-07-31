import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="image"/></li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
