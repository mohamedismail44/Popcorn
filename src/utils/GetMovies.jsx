import { useEffect, useState } from "react";

export default function GetMovies(query, movieDetails) {
  const [Movies, setMovies] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [Details, setDetails] = useState({});
  const [IsLoadingDetails, setIsLoadingDetails] = useState(false);

  const KEY = "b2453ff5";

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) {
          throw new Error("failed Fetch data");
        }
        const data = await res.json();
        if (query.length < 3) {
          throw new Error("Please Write Movie Name");
        }
        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        } else {
          setMovies(data.Search);
          setError("");

        }
      } catch (error) {
        setError(error.message);
        setMovies([]);

      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    async function fetchDetails() {
      if (movieDetails) {
        setIsLoadingDetails(true);
      }

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${movieDetails}`
      );
      const data = await res.json();

      if (data.Response !== "False") {
        setDetails(data);
        setIsLoadingDetails(false);
      }
    }
    fetchDetails();
  }, [movieDetails]);

  return { Movies, IsLoading, error, Details, IsLoadingDetails };
}
