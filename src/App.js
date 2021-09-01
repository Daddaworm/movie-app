import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
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




  return (
    <div className="App">
      <NavBar />
      <Banner />

      <Switch>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/logout'>
            <Logout />
          </Route>
          <Route exact path='/moviecollection'>
            <MovieCollection />
          </Route>
          <Route exact path='/addmovie'>
            <AddMovie />
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
