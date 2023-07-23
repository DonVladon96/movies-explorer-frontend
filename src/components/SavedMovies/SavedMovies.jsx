import React, {useContext, useEffect, useState} from "react";
import "./SavedMovies.css";
import "../Movies/MoviesCardList/MoviesCardList.css";
import "../Movies/Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {CurrentUserContext} from "../App/App";
import {useResize} from "../../utils/HOOKS/UseResize";
import {
  ADD_MOVIES_SIZE_1280,
  ADD_MOVIES_SIZE_480,
  ADD_MOVIES_SIZE_768,
  MOVIES_SIZE_CARDS_1280,
  MOVIES_SIZE_CARDS_480,
  MOVIES_SIZE_CARDS_768,
  SCREEN_SIZE_1240
} from "../../utils/constants";
import {getLocalStorage, setLocalStorage} from "../localStorage/localStorage";
import MainApi from "../../utils/Api/MainApi";
import ApiFilm from "../../utils/Api/ApiFilm";
import {convertSaveMoviesData} from "../scripts/convertSaveMoviesData";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies(props) {

  const [preloader, setPreloader] = useState(false)
  const [counterCard, setCounterCard] = useState(0)
  const [switchCheked, setSwitchCheked] = useState(false)
  const [isOther, setisOther] = useState(false)
  const [durationLength, setDurationLength] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const {currentScreen} = useResize();
  const {
    findeSaveMoviesStore,
    setFindeSaveMoviesStore,
    saveMoviesStore,
    setSaveMoviesStore,
    setSearchText,
  } = useContext(CurrentUserContext);
  const titleName = "SaveMoviesSearch";

  const deliteFilm = (id) => {
    setSaveMoviesStore(prev => prev.filter(film => film._id !== id))
    setFindeSaveMoviesStore(prev => prev.filter(film => film._id !== id))
  }

  const switchHandler = (status) => {
    setSwitchCheked(status)
    setIsSearch(true)
  }

  useEffect(() => {
    if (switchCheked && durationLength > counterCard) {
      setisOther(true)
    } else if (!switchCheked && (findeSaveMoviesStore.length > 0 && findeSaveMoviesStore.length > counterCard)) {
      setisOther(true)
    } else {
      setisOther(false)
    }
  }, [findeSaveMoviesStore, counterCard, switchCheked, durationLength])


  useEffect(() => {
    switch (currentScreen) {
      case 'SCREEN_SIZE_1400':
        setCounterCard(MOVIES_SIZE_CARDS_1280)
        break;
      case "SCREEN_SIZE_1200":
        setCounterCard(MOVIES_SIZE_CARDS_1280)
        break;
      case "SCREEN_SIZE_1240":
        setCounterCard(MOVIES_SIZE_CARDS_1280)
        break;
      case "SCREEN_SIZE_768":
        setCounterCard(MOVIES_SIZE_CARDS_768)
        break;
      default:
        setCounterCard(MOVIES_SIZE_CARDS_480)
        break;
    }
  }, [currentScreen])

  useEffect(() => {
    setPreloader(true)
    const data = getLocalStorage(titleName);
    if (!data?.length && findeSaveMoviesStore.length === 0) {
      const fetchData = async () => {
        const saves = await MainApi.getSaveMovies();
        const data = await ApiFilm.getMovies();
        const convertSaves = await convertSaveMoviesData(data, saves)
        setSaveMoviesStore(convertSaves);
        setFindeSaveMoviesStore(convertSaves)
      }
      fetchData();
    } else if (data?.length && findeSaveMoviesStore.length === 0) {
      setSaveMoviesStore(data);
      setFindeSaveMoviesStore(data)
    }
    setPreloader(false)
    setSearchText('')
  }, []);

  useEffect(() => {
    setLocalStorage(titleName, saveMoviesStore);
  }, [saveMoviesStore])

  const findeMovies = (text) => {
    setPreloader(true)
    if (text.length > 0) {
      const a = text.toLowerCase().trim()
      setFindeSaveMoviesStore(saveMoviesStore.filter((obg) => obg.nameRU.toLowerCase().indexOf(a) !== -1 || obg.nameEN.toLowerCase().indexOf(a) !== -1))
    }
    setIsSearch(true)
    setPreloader(false)
  }

  const addMoviesCard = () => {
    let add = ADD_MOVIES_SIZE_1280;
    if (currentScreen === 'SCREEN_SIZE_768') {
      add = ADD_MOVIES_SIZE_768
    } else if (currentScreen === 'SCREEN_SIZE_480') {
      add = ADD_MOVIES_SIZE_480
    }
    setCounterCard(prev => prev + add)
  }


  return (
    <>
      <HeaderLogedin/>
      <main className="main-container">
        <SearchForm nameLocal={titleName} {...props} findeMovies={findeMovies} switchCheked={switchCheked}
                    switchHandler={switchHandler}/>
        {preloader && <Preloader/>}
        {!preloader &&
          <MoviesCardList titleName={titleName}  {...props} cards={findeSaveMoviesStore} switchCheked={switchCheked}
                          counterCard={counterCard} setDurationLength={setDurationLength} saveMoviesCards
                          deliteFilm={deliteFilm} isSearch={isSearch}/>}
        {isOther && <button className="main__button-container" onClick={addMoviesCard}>Еще</button>}
      </main>
      <Footer/>
    </>
  )

}

export default SavedMovies;
