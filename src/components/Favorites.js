import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'

const Favorites = ({ favorites, setFavorites, setMovieUpdate }) => {

    const renderMovieCard = () => {
        return favorites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} movies={favorites} setFavorites={setFavorites} favorites={favorites} setMovieUpdate={setMovieUpdate}/>
        })
    }

    return (
        <div>
            <br />
            <h5 className='title__favorite'>My Favorites</h5><br />
            <br />
            <div className='movie__collection'>
                {renderMovieCard()}
                
            </div>
        </div>
    )
}

export default Favorites
