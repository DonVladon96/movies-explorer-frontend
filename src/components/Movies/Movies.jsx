import React, {useContext, useEffect, useState} from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import { getMovies } from "../../utils/Api/ApiFilm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {CurrentUserContext} from "../App/App";
import {
  ADD_MOVIES_SIZE_1280,
  ADD_MOVIES_SIZE_480,
  ADD_MOVIES_SIZE_768,
  MOVIES_SIZE_CARDS_1280,
  MOVIES_SIZE_CARDS_480,
  MOVIES_SIZE_CARDS_768
} from "../../utils/constants";
import {useResize} from "../../utils/HOOKS/UseResize";
import {getLocalStorage, setLocalStorage} from "../localStorage/localStorage";
import MainApi from "../../utils/Api/MainApi";
import ApiFilm from "../../utils/Api/ApiFilm";
import {convertSaveMoviesData} from "../scripts/convertSaveMoviesData";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies(props) {
  const {searchHandler} = props;
  const titleName = "MoviesSearch";
  const [switchCheked, setSwitchCheked] = useState(false);
  const [isSearch, setIsSearch] = useState(false);


  const [preloader, setPreloader] = useState(false);
  const [counterCard, setCounterCard] = useState(0);

  const [isOther, setisOther] = useState(false);
  const [flag, setFlag] = useState(false);

  const [durationLength, setDurationLength] = useState(0);
  const {currentScreen} = useResize();
  const {
    setSaveMoviesStore,
    setFindeSaveMoviesStore,
    cards,
    setCards,
    films,
    setFilms,
    setSearchFormState
  } = useContext(CurrentUserContext);

  const switchHandler = (status) => {
    const settings = localStorage.getItem(`settings_${titleName}`);
    if (settings) {
      const obj = JSON.parse(settings);
      obj.shortSwich = status;
      localStorage.setItem(`settings_${titleName}`, JSON.stringify(obj))
    } else {
      localStorage.setItem(`settings_${titleName}`, `{"searchText": "", "shortSwich": ${status}}`)
    }
    setSwitchCheked(status);
    setIsSearch(true);
  };

  useEffect(() => {
    if (switchCheked && durationLength > counterCard) {
      setisOther(true);
    } else if (
      !switchCheked &&
      films.length > 0 &&
      films.length > counterCard
    ) {
      setisOther(true);
    } else {
      setisOther(false);
    }
  }, [films, counterCard, switchCheked, durationLength]);

  useEffect(() => {
    switch (currentScreen) {
      case "SCREEN_SIZE_1400":
        setCounterCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_1200":
        setCounterCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_1240":
        setCounterCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_768":
        setCounterCard(MOVIES_SIZE_CARDS_768);
        break;
      default:
        setCounterCard(MOVIES_SIZE_CARDS_480);
        break;
    }
  }, [currentScreen]);

  useEffect(() => {
    const searchSetings = getLocalStorage(`settings_${titleName}`);
    if (searchSetings?.searchText) {
      setSearchFormState(searchSetings.searchText)
      setIsSearch(true)
    }
    if (searchSetings?.shortSwich) {
      setSwitchCheked(searchSetings.shortSwich)
    }

    if (!cards.length) {
      setPreloader(true);
      const fetchData = async () => {
        const MoviesSearchData = await getLocalStorage(titleName);

        if (!MoviesSearchData?.length) {
          const saves = await MainApi.getSaveMovies();
          const data = await ApiFilm.getMovies();
          const convertSaves = await convertSaveMoviesData(data, saves)
          setSaveMoviesStore(convertSaves);
          setFindeSaveMoviesStore(convertSaves);

          const newData = data.map((item) => {
            const isFind = saves.find((obg) => obg.movieId === item.id);
            return {...item, inSaved: !!isFind};
          });

          setCards(newData);
        } else {
          setCards(MoviesSearchData);
          setFlag(true);
        }
        setPreloader(false);
      };
      fetchData();
    }

  }, []);

  useEffect(() => {
    setLocalStorage(titleName, cards);
  }, [cards])

  useEffect(() => {
    if (flag) {
      setSearchFormState('');
      const settings = localStorage.getItem(`settings_${titleName}`);
      if (settings) {
        const obj = JSON.parse(settings);
        if (obj.searchText.length > 0) {
          searchHandler(obj.searchText, titleName);
          findeMovies(obj.searchText);
        }
        setSwitchCheked(obj.shortSwich);
      }
    }
  }, [flag])

  const findeMovies = (text) => {
    setPreloader(true);
    if (text.length < 2) {
      setFilms(cards);
    } else {
      const a = text.toLowerCase().trim();
      setFilms(
        cards.filter(
          (obg) =>
            obg.nameRU.toLowerCase().indexOf(a) !== -1 ||
            obg.nameEN.toLowerCase().indexOf(a) !== -1
        )
      );
    }
    setIsSearch(true);
    setPreloader(false);
  };

  const addMoviesCard = () => {
    let add = ADD_MOVIES_SIZE_1280;
    if (currentScreen === "SCREEN_SIZE_768") {
      add = ADD_MOVIES_SIZE_768;
    } else if (currentScreen === "SCREEN_SIZE_480") {
      add = ADD_MOVIES_SIZE_480;
    }
    setCounterCard((prev) => prev + add);
  };

  return (
    <>
      <HeaderLogedin/>

      <main className="main">
        <SearchForm
          nameLocal={titleName}
          {...props}
          findeMovies={findeMovies}
          switchCheked={switchCheked}
          switchHandler={switchHandler}
        />
        {preloader && <Preloader/>}
        {!preloader && (
          <MoviesCardList
            {...props}
            titleName={titleName}
            cards={films}
            switchCheked={switchCheked}
            counterCard={counterCard}
            setDurationLength={setDurationLength}
            isSearch={isSearch}
          />
        )}
        {isOther && (
          <div className="main__button-container">
          <button type="button" className="movies-button" onClick={addMoviesCard}>
          Еще
          </button>
          </div>
        )}
          </main>
          <Footer/>
          </>
          );
        }

        export default Movies;
