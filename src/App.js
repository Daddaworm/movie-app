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
import About from './components/About';
import UpdateMovie from './components/UpdateMovie';


function App() {

const [currentUser, setCurrentUser] = useState(null)
const [errors, setErrors] = useState([])
const [categories, setCategories] = useState([])
const [movies, setMovies] = useState([])
const [userCategories, setUserCategories] = useState([])
const [movieUpdate, setMovieUpdate] = useState({})
const [favorites, setFavorites] = useState([])

const history = useHistory();

const handleSignupLogin = (data) => {
  data.errors ? setErrors(data.errors) : handleState(data)
  if(!data.errors) {
    history.push('/moviecollection')
    setErrors([])
  }
}

const handleState = (data) => {
  if(!data.errors){
      setCurrentUser(data)
      setMovies(data.movies)
      setUserCategories(data.categories)
      setFavorites(filterFavorites(data.movies))
  } else {
    setMovies([])
    setFavorites([])
  }
}

const stateInitializer = () => {
  checkSessionId()
  fetchCategories()
}

const checkSessionId = () => {
  fetch('/me')
  .then(resp => resp.json())
  .then(data => {
    handleState(data)
  })
}

const fetchCategories = () => {
  fetch('/categories')
  .then(resp => resp.json())
  .then(data => setCategories(data))
}

const filterFavorites = (movies) => {
  return movies.filter(movie => {
    return movie.favorite === true
  })
}

useEffect(stateInitializer, [])


  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      
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
            <MovieCollection userCategories={userCategories} movies={movies} setMovies={setMovies} setMovieUpdate={setMovieUpdate} favorites={favorites} setFavorites={setFavorites}/>
          </Route>
          <Route exact path='/addmovie'>
            <AddMovie categories={categories} setMovies={setMovies} errors={errors} movies={movies} />
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites} setFavorites={setFavorites} setMovieUpdate={setMovieUpdate}/>
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
