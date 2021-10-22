import React, { useState } from 'react'
import Errors from './Errors'
import { useHistory } from 'react-router'

const UpdateMovie = ({ categories, errors, movies, setMovies, movieUpdate }) => {

    const {id} = movieUpdate

    const history = useHistory()
    const [state, setState] = useState({title: movieUpdate.title, overview: movieUpdate.overview, poster_url: movieUpdate.poster_url, trailer_url: movieUpdate.trailer_url})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleUpdateMovie = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch(`/movies/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors) {
                    setMovies(movies.map(movie => movie.id === id ? data : movie))
                    history.push('/moviecollection')
                }
            } 
        )
    }

    const renderCategories = () => {
        return categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    }

    return (
        <div className='add__movie__div'>
            <br />
            <h5 id="add__movie__header">Update movie</h5>
            <div className='add__movie__form'>
                <form onSubmit={handleUpdateMovie} >
                    <input onChange={onChange} type="text" value={state.title} name='title' placeholder='Enter movie title' size='101'></input><br />
                    <p><br />
                        <select onChange={onChange} className='mpaa__rating__select' name='mpaa_rating'>
                            <option value="" disabled selected>Select MPAA rating</option>
                            <option value='G'>Rated: G - General Audiences. All ages admitted</option>
                            <option value='PG'>Rated: PG - Parental guidence suggested. Some material may not be suited for children</option>
                            <option value='PG-13'>Rated: PG-13 - Parents stronly cautioned. Some material may be inappropriate for childre under 13</option>
                            <option value='R'>Rated: R - Restricted. Children under 17 require accompanying parent or legal guardian</option>
                            <option value='NC-17'>Rated: NC-17 - No one under 17 admitted</option>
                            <option value='Not yet rated'>Not yet rated</option>
                        </select>
                    </p>
                    <p>
                        <select onChange={onChange} className='category__select' name="category_id">
                            <option disabled selected value> -- Select a category -- </option>
                            {renderCategories()}
                        </select>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='poster_url' value={state.poster_url} placeholder='Enter movie poster url' size='101'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' value={state.trailer_url} placeholder='Enter movie trailer url' size='101'></input>
                    </p>
                        <textarea onChange={onChange} name='overview' value={state.overview} placeholder='Enter movie overview' cols='100' rows='6'></textarea><br />
                        <input type='submit' ></input>
                    </form>
                    <Errors errors={errors} />
            </div>
        </div>
    )
}

export default UpdateMovie
