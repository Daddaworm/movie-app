import React from 'react'
import MovieCard from './MovieCard'

const Favorites = ({ favorites, setFavorites}) => {

    const renderMovieCard = () => {
        return favorites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} movies={favorites} setFavorites={setFavorites}/>
        })
    }

    return (
        <div>
            <h1>This is favorites</h1>
            <div className='movie__collection'>
                {renderMovieCard()}
                
            </div>
        </div>
    )
}

export default Favorites
