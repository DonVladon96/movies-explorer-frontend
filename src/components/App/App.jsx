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
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import Popup from '../Popup/Popup';
import InfoTooltip from "../InfoTooltip/InfoTooltip";
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

  const [saveMoviesStore, setSaveMoviesStore] = useState([]);
  const [findeSaveMoviesStore, setFindeSaveMoviesStore] = useState([]);

  //состояния для попап
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupMessage, setPopupMessage] = useState("");

  const [searchText, setSearchText] = useState('')
  const [isInfoMessage, setInfoMessage] = useState(null);

  const closePopup = () => {
    setPopupOpen(false);
    setPopupMessage("");
  };

  const closePopupHello = () => {
    setPopupOpen(false);
    setPopupMessage("");
  };

  const openPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };




  useEffect(() => {
    if(!localStorage.getItem("token") || localStorage.getItem("token") === ''){
      setLogedId(false)
    }
    else {
      getProfile()
        .then(data=>{
          if(data.message){
            localStorage.removeItem("token")
            setLogedId(false)
            window.location.reload();
          }
        })
        .catch(error => {
          console.error('Ошибка при обработке getProfile ', error)
        })
    }
  }, []);

  const searchHandler = (text, name) =>{

    if(name === 'MoviesSearch'){
      const settings =  localStorage.getItem(`settings_${name}`)
      if(settings){
        const obj = JSON.parse(settings);
        obj.searchText = text;
        localStorage.setItem(`settings_${name}`, JSON.stringify(obj))
      } else {
        localStorage.setItem(`settings_${name}`, `{"searchText": "${text}", "shortSwich": ${false}}`)
      }
    }
    setSearchText(text)
  }

  function closePopupsOnOutsideClick(evt) {
    const target = evt.target;
    const checkSelector = (selector) => target.classList.contains(selector);

    if (checkSelector('popup_opened') || checkSelector('popup__close')) {
      closePopupHello();
    }
    setInfoMessage(null)
  }

  function handleShowInfoMessage(message) {
    setInfoMessage(message);
  }

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={{setInfoMessage,
        saveMoviesStore, setSaveMoviesStore,  findeSaveMoviesStore, setFindeSaveMoviesStore,
        user, setUser, logedId, setLogedId, cards, setCards, films, setFilms, openPopup, setSearchText, closePopupHello}}>
        <div className='app'>
          <Routes>
            <Route exact path="/" element={<Main/>}/>

            <Route exact path="/signin"
                   element={
                     <ProtectedRoute logedId={!logedId}>
                       <Login  handleShowInfoMessage={handleShowInfoMessage} />
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
                       <Movies searchText={searchText} searchHandler={searchHandler}/>
                     </ProtectedRoute>
                   }
            />

            <Route exact path="/saved-movies"
                   element={
                     <ProtectedRoute logedId={logedId}>
                       <SavedMovies searchText={searchText} searchHandler={searchHandler}/>
                     </ProtectedRoute>
                   }
            />

            <Route exact path="*" element={<Page404/>}/>
          </Routes>
          <Popup popupOpen={popupOpen} popupMessage={popupMessage} closePopup={closePopup} />
          <InfoTooltip
            message={isInfoMessage}
            onClick={closePopupHello}
            closePopupsOnOutsideClick={closePopupsOnOutsideClick}
          />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>

  );
}

export default App;
