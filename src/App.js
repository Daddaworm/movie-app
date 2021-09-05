import './App.css';

import { Switch, Route, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Signup from './components/Signup';
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar';
import MovieCollection from './components/MovieCollection';
import AddMovie from './components/AddMovie';
import Favorites from './components/Favorites';
import Banner from './components/Banner';
import About from './components/About';
import UpdateMovie from './components/UpdateMovie';


function App() {

const [currentUser, setCurrentUser] = useState(null)
const [errors, setErrors] = useState([])
const [categories, setCategories] = useState([])
const [movies, setMovies] = useState([])
const [movieUpdate, setMovieUpdate] = useState({})
const [favorites, setFavorites] = useState([])

const history = useHistory();

const handleSignupLogin = (data) => {
  // console.log(data.errors, 'this is data.errors')
  console.log(data, 'this is data')
  data.errors ? setErrors(data.errors) : setCurrentUser(data)
  if(!data.errors) {
    history.push('/moviecollection')
    setErrors([])
  }
}

const stateInitializer = () => {
  checkSessionId()
  fetchCategories()
  // fetchMovies()
}

const checkSessionId = () => {
  fetch('/me')
  .then(resp => resp.json())
  .then(data => {
    setCurrentUser(data)
    setMovies(data.movies)
    setFavorites(filterFavorites(data.movies))
  })
}

// const setUserAndMovie

const fetchCategories = () => {
  fetch('/categories')
  .then(resp => resp.json())
  .then(data => setCategories(data))
}

const fetchMovies = () => {
  fetch('/movies')
  .then(resp => resp.json())
  .then(data => setMovies(data))
}

// const fetchUserMovies = () => {
//   if(currentUser){
//     fetch(`/users/${currentUser.id}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data.movies, 'user movies'))
//   } else {
//     console.log('not working')
//   }
// }

const filterFavorites = (movies) => {
  return movies.filter(movie => {
    return movie.favorite == true
  })
}

// useEffect(fetchUserMovies, [currentUser])

useEffect(stateInitializer, [])

// on page load call filterFavorites and also every time there is a change in movie state
// useEffect(setFavorites(filterFavorites), [])

  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <Banner />
      
      <Switch>
          <Route exact path='/signup'>
            <Signup handleSignupLogin={handleSignupLogin} errors={errors} />
          </Route>
          <Route exact path='/login'>
            <Login handleSignupLogin={handleSignupLogin} errors={errors} />
          </Route>
          <Route exact path='/logout'>
            <Logout setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path='/moviecollection'>
            <MovieCollection categories={categories} movies={movies} setMovies={setMovies} setMovieUpdate={setMovieUpdate} favorites={favorites} setFavorites={setFavorites}/>
          </Route>
          <Route exact path='/addmovie'>
            <AddMovie categories={categories} setMovies={setMovies} errors={errors} movies={movies} />
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route exact path='/updatemovie'>
            <UpdateMovie categories={categories} errors={errors} movieUpdate={movieUpdate} movies={movies} setMovies={setMovies}/>
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
