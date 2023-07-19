import './App.css';
import React, {createContext, useEffect, useState} from 'react';
import Main from "../Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import {Helmet} from 'react-helmet';
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {getProfile} from "../../utils/Api/MainApi";

// начинаю последний этап

export const CurrentUserContext = createContext();
const initialStateUser = {name: '', email: ''}

function App() {
  const [user, setUser] = useState(initialStateUser);
  const [logedId, setLogedId] = useState(true);

  //хуки для карточек и фильмов
  const [cards, setCards] = useState([])
  const [films, setFilms] = useState([])


  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{ user, setUser, logedId, setLogedId, cards, setCards, films, setFilms}}>
        <div className='app'>
          <Helmet>
            <title>Movies project</title>
            <html lang="ru"/>
          </Helmet>
          <Routes>
            <Route exact path="/" element={<Main/>}/>

            <Route exact path="/signin"
                   element={
                     <ProtectedRoute logedId={logedId}>
                       <Login/>
                     </ProtectedRoute>
                   }
            />

            <Route exact path="/signup"
                   element={
                     <ProtectedRoute logedId={!logedId}>
                       <Register />
                     </ProtectedRoute>
                   }
            />

            <Route exact path="/profile"
                   element={
                     <ProtectedRoute logedId={logedId}>
                       <Profile/>
                     </ProtectedRoute>
                   }
            />

            <Route exact path="/Movies"
                   element={
                     <ProtectedRoute logedId={logedId}>
                       <Movies />
                     </ProtectedRoute>
                   }
            />

            <Route exact path="/saved-movies"
                   element={
                     <ProtectedRoute logedId={logedId}>
                       <SavedMovies />
                     </ProtectedRoute>
                   }
            />

            <Route exact path="*" element={<Page404/>}/>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
