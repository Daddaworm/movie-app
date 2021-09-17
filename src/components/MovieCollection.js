import React from 'react'
import MovieCard from './MovieCard'
import './MovieCollection.css'

const MovieCollection = ({ userCategories, movies, setMovies, setMovieUpdate, favorites, setFavorites }) => {

    const renderMovieCard = () => {
        return movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} setMovieUpdate={setMovieUpdate} movies={movies} setMovies={setMovies} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    return (
        <div className='movie__collection__div'>
            <br />
            <h5 className='title__moviecollection' >My movie collection</h5>
            <br/>
            <br />
            <br />
            <br />
            <div className='movie__collection'>
                
                {renderMovieCard()}
                
            </div>
        </div>
    )
}

export default MovieCollection
