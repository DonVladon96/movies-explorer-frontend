import React, {useContext, useEffect, useState} from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
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
import  {getSaveMovies} from "../../utils/Api/MainApi";
import  {getMovies} from "../../utils/Api/ApiFilm";
import {arrMoviesData} from "../scripts/arrMoviesData";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";

function Movies(props) {
  const {searchHandler} = props;
  const titleName = "MoviesSearch";
  const [switchTumbler, setSwitchTumbler] = useState(false);
  const [isSearch, setIsSearch] = useState(false);


  const [preloader, setPreloader] = useState(false);
  const [standCard, setStandCard] = useState(0);

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
    setSearchText,
    movies
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
    setSwitchTumbler(status);
    setIsSearch(true);
  };

  useEffect(() => {
    if (switchTumbler && durationLength > standCard) {
      setisOther(true);
    } else if (
      !switchTumbler &&
      films.length > 0 &&
      films.length > standCard
    ) {
      setisOther(true);
    } else {
      setisOther(false);
    }
  }, [films, standCard, switchTumbler, durationLength]);

  useEffect(() => {
    switch (currentScreen) {
      case "SCREEN_SIZE_1400":
        setStandCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_1200":
        setStandCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_1240":
        setStandCard(MOVIES_SIZE_CARDS_1280);
        break;
      case "SCREEN_SIZE_768":
        setStandCard(MOVIES_SIZE_CARDS_768);
        break;
      default:
        setStandCard(MOVIES_SIZE_CARDS_480);
        break;
    }
  }, [currentScreen]);

  useEffect(() => {
    const searchSetings = getLocalStorage(`settings_${titleName}`);
    if (searchSetings?.searchText) {
      setSearchText(searchSetings.searchText)
      setIsSearch(true)
    }
    if (searchSetings?.shortSwich) {
      setSwitchTumbler(searchSetings.shortSwich)
    }

    if (!cards.length) {
      setPreloader(true);
      const fetchData = async () => {
        const MoviesSearchData = await getLocalStorage(titleName);

        if (!MoviesSearchData?.length) {
          const saves = await getSaveMovies();
          const data = await getMovies();
          const convertSaves = await arrMoviesData(data, saves)
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
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setSaveMoviesStore(savedMovies);
    setSearchText('');
    setCards([]);
    setFindeSaveMoviesStore([]);
  }, [movies, setSaveMoviesStore, setSearchText, setCards, setFindeSaveMoviesStore]);


  useEffect(() => {
    setLocalStorage(titleName, cards);
  }, [cards])

  useEffect(() => {
    if (flag) {
      setSearchText('');
      const settings = localStorage.getItem(`settings_${titleName}`);
      if (settings) {
        const obj = JSON.parse(settings);
        if (obj.searchText.length > 0) {
          searchHandler(obj.searchText, titleName);
          findeMovies(obj.searchText);
        }
        setSwitchTumbler(obj.shortSwich);
      }
    }
  }, [flag])

  const findeMovies = (text) => {
    setPreloader(true);

    if (text.length < 2) {
      setFilms(cards);
    } else {
      const searchText = text.toLowerCase().trim();
      const filteredCards = cards.filter(card => {
        const isMatch = card.nameRU.toLowerCase().includes(searchText) || card.nameEN.toLowerCase().includes(searchText);
        return isMatch;
      });
      setFilms(filteredCards);
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
    setStandCard((prev) => prev + add);
  };

  //тест другого подхода


  return (
    <>
      <HeaderLogedin/>

      <main className="main">
        <SearchForm
          nameLocal={titleName}
          {...props}
          findeMovies={findeMovies}
          switchCheked={switchTumbler}
          switchHandler={switchHandler}
        />
        {preloader && <Preloader/>}
        {!preloader && (
          <MoviesCardList
            {...props}
            titleName={titleName}
            cards={films}
            switchCheked={switchTumbler}
            counterCard={standCard}
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
