import Loading from "./Loading";

export default function BoxOneAllMovies({
  Movies,
  setMovieDetails,
  setShowFavList,
  IsLoading,
}) {
  const openDetail = (id) => {
    setMovieDetails(id);
    setShowFavList(true);
  };
  return (
    <div className="">
      {IsLoading ? (
        <Loading />
      ) : (
        <div className="">
          {Movies.map((ele, index) => (
            <div onClick={() => openDetail(ele.imdbID)} className="cursor-pointer duration-200 hover:opacity-60"  key={index}>
              <div className="py-2 px-6 flex items-center">
                <div className="w-12 mr-6 cursor-pointer">
                  <img
                    
                    src={ele.Poster}
                    alt=""
                  />
                </div>
                <div className="">
                  <h1>{ele.Title}</h1>
                  <h1>📆 {ele.Year}</h1>
                </div>
              </div>
              <p className="border border-[#212529]"></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
