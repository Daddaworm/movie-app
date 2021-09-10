import React from "react";
import { Card } from 'react-bootstrap'
import './MovieCard.css'

const MovieCardFront = ({movie}) => {
    return (
        <div className='movie__card__front' >
            {/* <img src={movie.poster_url} alt={''}></img> */}
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.poster_url} />
                {/* <Card.Body>
                    <Card.Title><h6>{movie.title}</h6></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
        </Card> 
        </div>
    );
};

export default MovieCardFront;
