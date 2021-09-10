import React from 'react'
import MovieCard from './MovieCard'
import './MovieCollection.css'

const MovieCollection = ({ userCategories, movies, setMovies, setMovieUpdate, favorites, setFavorites }) => {

    const renderMovieCard = () => {
        return movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} setMovieUpdate={setMovieUpdate} movies={movies} setMovies={setMovies} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }


    // const handleAlphaSort = () => {
    //     fetch('/alpha')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
                
    //     })
    // }

    // const handleRatingSort = () => {
    //     fetch('/alpha')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
                
    //     })
    // }

    // const handleCategorySort = () => {
    //     fetch('/alpha')
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
                
    //     })
    // }


    return (
        <div className='movie__collection__div'>
            <br />
            <h5 className='title__moviecollection' >My movie collection</h5>
            <br/>
            {/* <button className='sort__byname__button' >Sort by Name</button>
            <button className='sort__byrating__button' >Sort by Rating</button>
            <button className='sort__bycategory__button' >Sort by Category</button> */}
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
