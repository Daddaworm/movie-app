import React, { useState } from 'react'
import MovieCardFront from './MovieCardFront'
import MovieCardBack from './MovieCardBack'
import './MovieCard.css'


const MovieCard = ({ movie }) => {

    const [visible, setVisible] = useState(true)

    const handleCardFlip = () => {
        setVisible(!visible)
            // if(movieCardVisible){
            //     return <MovieCardFront movie={movie}/>
            // } else {
            //     return <MovieCardBack />
            // }
        }

    return (
        <div className='poster__div'>
            {/* <img id='post__image' src={movie.poster_url} alt=''></img> */}
            <div onClick={handleCardFlip}>
                {visible ? <MovieCardFront  movie={movie} /> : <MovieCardBack movie={movie} />}
            </div>
        </div>
    )
}

export default MovieCard
