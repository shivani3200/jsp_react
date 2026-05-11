import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter } from "./react-router-dom";
import FavouriteMovie from "./components/FavouriteMovie";
import WatchLaterMovie from "./components/WatchLaterMovie";
import MovieContext from "./utils/movieContext";

function App() {
  const [favouriteMovieList, setFavoriteMovieList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);


  function setFavorite(){
    setFavoriteMovieList
  }

  return (
    <>
      <MovieContext.Provider value={{favouriteMovieList, watchLaterList}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route to="/" element={<Home />} />
            <Route to="/favouritemovie" element={<FavouriteMovie />} />
            <Route to="/watchlater" element={<WatchLaterMovie />} />
          </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
    </>
  );
}

export default App;
