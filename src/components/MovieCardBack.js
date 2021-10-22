import React from 'react'
import './MovieCard.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useHistory } from 'react-router'

const MovieCardBack = ({movie, setMovieUpdate, movies, setMovies, setFavorites, favorites, userCategories }) => {

    const {id} = movie
    const history = useHistory()

    const handleClick = () => {
        setMovieUpdate(movie)
        history.push ('/updatemovie')
    }

    const handleDeleteMovie = () => {
        let config = {
            method: 'DELETE'
        }

        fetch(`/movies/${id}`, config)
        setMovies(
            movies.filter(movie => {
                return movie.id !== id 
            })
        )
    }

    const handleFavorite = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: true})
        }
        fetch(`/movies/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors) {
                    setFavorites([...favorites, data])
                }
            } 
        )
    }

    const handleRemoveFavorite = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({favorite: false})
        }
        fetch(`/movies/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if(!data.errors) {
                    setFavorites(filterFavorites())
                }
            } 
        )
    }

    const filterFavorites = () => {
        return favorites.filter(favorite => favorite.id !== id)
    }

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
                    {truncate(movie.overview, 160)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>MPAA Rating: {movie.mpaa_rating}</ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Card.Link href={movie.trailer_url} target="_blank">Watch Movie Trailer</Card.Link></ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    {   movie.favorite 
                        ?<ListGroupItem><Card.Link onClick={handleRemoveFavorite} href="#">Remove favorite</Card.Link></ListGroupItem>
                        :<ListGroupItem><Card.Link onClick={handleFavorite} href="#">Add to favorites</Card.Link></ListGroupItem>
                    }
                </ListGroup>
                <Card.Body>
                    {   movie.favorite
                        ?   <Card.Link onClick={handleClick} >Update Movie</Card.Link>
                        :<>
                            <Card.Link onClick={handleClick} >Update Movie</Card.Link>
                            <Card.Link onClick={handleDeleteMovie} href="#" >Delete Movie</Card.Link >
                        </>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCardBack
