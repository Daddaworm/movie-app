import React, { useState } from 'react'
import MovieCardFront from './MovieCardFront'
import MovieCardBack from './MovieCardBack'
import './MovieCard.css'

const MovieCard = ({ movie, setMovieUpdate, movies, setMovies, favorites, setFavorites }) => {

    const [visible, setVisible] = useState(true)

    const handleCardFlip = () => {
        setVisible(!visible)
        }

    return (
        <div className='poster__div'>
            {/* <img id='post__image' src={movie.poster_url} alt=''></img> */}
            <div onClick={handleCardFlip}>
                {visible ? <MovieCardFront  movie={movie} /> : <MovieCardBack movie={movie}  setMovieUpdate={setMovieUpdate} movies={movies} setMovies={setMovies} favorites={favorites} setFavorites={setFavorites}/>}
            </div>
        </div>
    )
}

export default MovieCard
