import { useEffect, useState } from "react";
import AsideBar from "./AsideBar";
import styled from "styled-components";
import Results from "./Results";
import LoadingPlaceholder from "./LoadingPlaceholder";

const Main = styled.div`
  display: flex;
  margin: 1rem 0;
`;

function MainSection() {
  const [genres, setGenres] = useState("");

  const [genresGameDetails, setGenresGameDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      async function fetchGamesOfGenres() {
        if (!genres) return;
        setIsLoading(true);
        const res = await fetch(
          `https://api.rawg.io/api/games?genres=${genres}&key=9fff4d4f36a440079093d0357c74ad76`
        );
        const response = await res.json();
        const { results } = response;
        setIsLoading(false);
        console.log(results)
        setGenresGameDetails(results);


        return () => setGenresGameDetails(null);
      }
      fetchGamesOfGenres();
    },
    [genres]
  );
  return (
    <Main className="main-section">
      <AsideBar setGenres={setGenres} />
      {isLoading ? (
        <LoadingPlaceholder />
      ) : (
        <Results gameDetails={genresGameDetails} />
      )}
    </Main>
  );
}

export default MainSection;
