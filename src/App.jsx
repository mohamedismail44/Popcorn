import { useState } from "react";
import GetMovies from "./utils/GetMovies";
import DetailsPage from "./components/DetailsPage";
import BoxOneAllMovies from "./components/BoxOneAllMovies";
import Navbar from "./components/Navbar";
import StartBoxTwo from "./components/StartBoxTwo";

function App() {
  const [query, setQuery] = useState("");
  const [movieDetails, setMovieDetails] = useState("");
  const { Movies, IsLoading, error, Details, IsLoadingDetails } = GetMovies(
    query,
    movieDetails
  );
  const [ShowFavList, setShowFavList] = useState(true);

  return (
    <div className="bg-[#212529] h-lvh text-white">
      {/* Navbar */}
      <Navbar setQuery={setQuery} Movies={Movies} />
      {/* Movies List */}
      <div className="flex  justify-center m-4">
        <div className="flex gap-2 ">
          {/* BOX ONE */}
          <div className="bg-[#2B2F35] h-[40rem] w-[25rem] rounded-md overflow-scroll">
            {Movies.length > 0 ? (
              <BoxOneAllMovies
                Movies={Movies}
                setMovieDetails={setMovieDetails}
                setShowFavList={setShowFavList}
                IsLoading={IsLoading}
              />
            ) : (
              error
            )}
          </div>
          {/* BOX TWO */}
          <div className="bg-[#2B2F35] h-[40rem] w-[25rem] rounded-md overflow-scroll">
            <StartBoxTwo />
            {movieDetails && (
              <DetailsPage
                ShowFavList={ShowFavList}
                setShowFavList={setShowFavList}
                Details={Details}
                IsLoadingDetails={IsLoadingDetails}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
