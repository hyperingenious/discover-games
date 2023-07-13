import { useEffect, useState } from "react";
import AsideBar from "./AsideBar";
import ResultsBox from "./ResultsBox";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const details = {
  id: 1,
  name: "Default",
  slug: "racing",
  games_count: 24046,
  image_background:
    "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
  description:
    "<p>Racing games is the video game genre with a high focus on driving competition. Such games are usually presented from the first-person or a third-person perspective. It is noted that gamepads are generally more suited to control the vehicle than keyboard/mouse pair. Although car avatars may render real-life examples, there are many instances where spaceships, formless mechanisms and other fantastical entities take the role of the avatar. Grand Prix released in 1969 is considered to be the first racing game ever made. Racings is a defining genre of a video game which is, in turn, can be divided into a lot of sub-genres: for instance, a primary focus may be made on destroying enemies&#39; vehicles (FlatOut, Twisted Metal) or crushing as many environments as possible (Split/Second). Those mechanics can alternatively be mixed with open world structure or set in the defined assortment of separate racing events.</p>",
};

function MainSection() {
  const [genres, setGenres] = useState("");
  const [genresDetails, setGenresDetails] = useState(details);

  useEffect(
    function () {
      async function fetchGame() {
        if (!genres) return;
        
        setGenresDetails("");
        const res = await fetch(
          `https://api.rawg.io/api/genres/${genres}?key=9fff4d4f36a440079093d0357c74ad76`
        );
        const response = await res.json();
        setGenresDetails(response);

        return () => setGenresDetails("");
      }
      fetchGame();
    },
    [genres]
  );
  return (
    <Main className="main-section">
      <AsideBar setGenres={setGenres} />
      <ResultsBox data={genresDetails} />
    </Main>
  );
}

export default MainSection;
