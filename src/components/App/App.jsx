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


function App() {

  const [ currentUser ] = useState({
    name: 'Vlad',
    email: 'test123@mail.ru',
    loggeIn: false,
  });

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
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

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
