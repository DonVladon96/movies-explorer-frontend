import './App.css';
import React, {useState} from 'react';
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import { Helmet } from 'react-helmet';

function App() {

  const [currentUser, setCurrentUser] = useState({
    name: 'Vlad',
    email: 'test1234@mail.ru',
    loggeIn: true,
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Helmet>
          <title>Movies project</title>
          <html lang="ru" />
        </Helmet>
        <Routes>
          <Route exact path="/" element={<Main/>}/>

          <Route exact path="/signin"
                 element={
                   <Login/>
                 }
          />

          <Route exact path="/signup"
                 element={
                   <Register/>
                 }
          />

          <Route exact path="/profile"
                 element={
                   <Profile/>
                 }
          />

          <Route exact path="/Movies"
                 element={
                   <Movies/>
                 }
          />

          <Route exact path="/saved-movies"
                 element={
                   <SavedMovies/>
                 }
          />

          <Route exact path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
