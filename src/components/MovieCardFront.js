import React from "react";
import { Card } from 'react-bootstrap'
import './MovieCard.css'

const MovieCardFront = ({movie}) => {
    return (
        <div className='movie__card__front' >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster_url} />
        </Card> 
        </div>
    );
};

export default MovieCardFront;
