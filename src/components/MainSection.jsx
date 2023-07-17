import { useEffect, useReducer } from "react";
import AsideBar from "./AsideBar";
import styled from "styled-components";
import Results from "./Results";
import LoadingPlaceholder from "./LoadingPlaceholder";

const Main = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const initialState = {
  genres: "",
  genresGameDetails: null,
  // ready, loading, error
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "requested":
      return { ...state, status: "loading" };
    case "dataReady":
      return { ...state, status: "ready" };
    case "genreDetailsArrived":
      return { ...state, genresGameDetails: action.payload };
    case "resetGameGenreDetails":
      return { ...state, genresGameDetails: null };
    case "updateGenre":
      return { ...state, genres: action.payload };
  }
}

function MainSection() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { genres, genresGameDetails, status } = state;
  // const [genres, setGenres] = useState("");
  // const [genresGameDetails, setGenresGameDetails] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function fetchGamesOfGenres() {
        if (!genres) return;
        dispatch({ type: "requested" });
        const res = await fetch(
          `https://api.rawg.io/api/games?genres=${genres}&key=9fff4d4f36a440079093d0357c74ad76&page=1`
        );
        const response = await res.json();
        const { results } = response;
        dispatch({ type: "dataReady" });
        dispatch({ type: "genreDetailsArrived", payload: results });

        return () => dispatch({ type: "resetGameGenreDetails" });
      }
      fetchGamesOfGenres();
    },
    [genres]
  );
  return (
    <Main className="main-section .bg-black">
      <AsideBar setGenres={dispatch} />
      {status === "loading" ? (
        <LoadingPlaceholder />
      ) : (
        <Results gameDetails={genresGameDetails} />
      )}
    </Main>
  );
}

export default MainSection;
