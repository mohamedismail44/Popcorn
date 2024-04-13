import { useState } from "react";
import FavoriteList from "./FavoriteList";
import Loading from "./Loading";

export default function DetailsPage({
  Details,
  ShowFavList,
  setShowFavList,
  IsLoadingDetails,
}) {
  const [favorite, setFavorite] = useState([]);

  const xo = () => {
    if (Details.Title) {
      const exist = favorite.find((x) => x === Details);
      if (exist) {
        alert("Movie already added");
      } else {
        setFavorite((old) => [...old, Details]);
        setShowFavList(false);
      }
    }
  };
  // console.log("favorite", favorite);

  return ShowFavList ? (
    IsLoadingDetails ? (
      <Loading />
    ) : (
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="bg-[#343A3F] w-full h-44 flex justify-between items-center">
          <img className="h-full" src={Details.Poster} alt="" />
          <div className="flex flex-col px-6 gap-2">
            <h4 className="font-bold">{Details.Title}</h4>
            <h4 className="text-sm">
              {Details.Released}.{Details.Runtime}
            </h4>
            <h4 className="text-sm">{Details.Genre}</h4>
            <h4 className="text-sm">⭐ {Details.imdbRating} IMDB Rating</h4>
          </div>
          
        </div>
        <div className="flex flex-col justify-center items-center w-[80%] gap-8">
          <div className="border border-red-600 ">
            <button
              onClick={xo}
              className=" bg-red-600 px-12 py-2 duration-300 hover:mt-1 hover:ml-1 "
            >
              Add To List
            </button>
          </div>
          <div className="flex flex-col  gap-3">
            <p>{Details.Plot}</p>
            <p>{Details.Actors}</p>
            <p>{Details.Title}</p>
          </div>
        </div>
      </div>
    )
  ) : (
    <FavoriteList setFavorite={setFavorite} favorite={favorite} />
  );
}
