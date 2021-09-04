import React, { useState } from 'react'
import Row from './Row'
import MovieCard from './MovieCard'
import './MovieCollection.css'


const MovieCollection = ({ categories, movies }) => {

    
    // const handleCardFlip = () => {
    //     if(movieCardVisable){
    //         return <MovieCardFront movie={movie}/>
    //     } else {
    //         return <MovieCardBack />
    //     }
    // }

    
    const renderMovieCard = () => {
        return movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
        })
    }

    return (
        <div>
            <h1>This is Movie collection</h1>
            <div className='movie__collection'>
                {renderMovieCard()}
                
            </div>
        </div>
    )
}

export default MovieCollection
