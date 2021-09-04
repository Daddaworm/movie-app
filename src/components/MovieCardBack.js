import React from 'react'
import './MovieCard.css'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const MovieCardBack = ({movie}) => {


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='movie__card__back'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                    {truncate(movie.overview, 190)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>MPAA Rating: {movie.mpaa_rating}</ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Card.Link href={movie.trailer_url} target="_blank">Watch Movie Trailer</Card.Link></ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Card.Link href="#">Add to favorites</Card.Link></ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Edit Movie</Card.Link>
                    <Card.Link href="#">Delete Movie</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCardBack
