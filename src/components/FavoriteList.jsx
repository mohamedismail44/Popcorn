export default function FavoriteList({ favorite, setFavorite }) {
  const deleteMovie = (MovieId) => {
    const xo = favorite.filter((ele) => ele.imdbID !== MovieId);
    setFavorite(xo);
  };

  return (
    <div>
      {favorite.map((ele, index) => (
        <div key={index} className="">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-[#343A3F] w-full text-center h-36 flex justify-between items-center">
              <img className="h-[60%] m-5" src={ele.Poster} alt="" />
              <div className="flex flex-col gap-2">
                <h4 className="font-bold">{ele.Title}</h4>
                <h4 className="text-sm">
                  {ele.Released}---{ele.Runtime}
                </h4>
                <h4 className="text-sm">{ele.Genre}</h4>
                <h4 className="text-sm">⭐ {ele.imdbRating} IMDB Rating</h4>
              </div>
              <div className="">
                <h4
                  onClick={() => deleteMovie(ele.imdbID)}
                  className="p-1 rounded-full mr-2 bg-red-800 cursor-pointer hover:bg-red-900"
                >
                  x
                </h4>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[80%] gap-8"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
