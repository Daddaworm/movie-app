import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'
import './AddMovie.css'

const AddMovie = ({ categories, setMovies, errors, movies }) => {

    const [state, setState] = useState({})

    const history = useHistory()

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleCreateMovie = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/movies', config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors){
                    setMovies([data, ...movies])
                    history.push('/moviecollection')
                }
            })
    }

    const renderCategories = () => {
        return categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
        
    } 

    return (
        <div className='add__movie__div'>
            <br />
            <h5 className="title__addmovie">Add a movie to your colletion!</h5>
            <br />
            <br />
            <div className='add__movie__form'>
                <form onSubmit={handleCreateMovie} >
                    
                    <input onChange={onChange} type="text" name='title' placeholder='Enter movie title' size='101'></input><br />
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
                        <input onChange={onChange} type="text" name='poster_url' placeholder='Enter movie poster url' size='101'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' placeholder='Enter movie trailer url' size='101'></input>
                    </p>
                    
                    <textarea onChange={onChange} name='overview' placeholder='Enter movie overview' cols='100' rows='6'></textarea><br /><br />

                    <input type='submit' ></input>
                    
                </form>
                <Errors errors={errors} />
            </div>
        </div>
    )
}

export default AddMovie
