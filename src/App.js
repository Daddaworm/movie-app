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


function App() {

const [currentUser, setCurrentUser] = useState(null)
const [errors, setErrors] = useState([])
const [categories, setCategories] = useState([])
const [movies, setMovies] = useState([])

const history = useHistory();

const handleSignupLogin = (data) => {
  // console.log(data.errors, 'this is data.errors')
  console.log(data, 'this is data')
  data.errors ? setErrors(data.errors) : setCurrentUser(data.user)
  if(!data.errors) {
    history.push('/moviecollection')
    setErrors([])
  }
}

const stateInitializer = () => {
  checkSessionId()
  fetchCategories()
}

const checkSessionId = () => {
  fetch('/me')
  .then(resp => resp.json())
  .then(data => setCurrentUser(data))
}

const fetchCategories = () => {
  fetch('/categories')
  .then(resp => resp.json())
  .then(data => setCategories(data))
}

useEffect(stateInitializer, [])

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
            <MovieCollection />
          </Route>
          <Route exact path='/addmovie'>
            <AddMovie categories={categories} setMovies={setMovies} />
          </Route>
          <Route exact path='/favorites'>
            <Favorites />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
