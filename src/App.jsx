import { useReducer } from "react";
import Aside from "./components/aside/Aside";
import NavBar from "./components/navbar/NavBar";
import ResultsBar from "./components/results/Results";
import { useEffect } from "react";

const initialState = {
  genreQuery: "action",
  searchQuery: "",
  orderBy: null,
  filterBy: null,
  results: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "initialRender":
      return {
        ...state,
        results: action.payload,
      };
  }
}

function App() {
  const [{ genreQuery, searchQuery, orderBy, filterBy, results }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(
    function () {
      async function fetchMe() {
        const res = await fetch(
          `https://api.rawg.io/api/games?genre=${genreQuery}&key=c6f8b5ce943f406b91d0b988cd02f707`
        );
        const response = await res.json();
        dispatch({ type: "initialRender", payload: response.results });
      }
      fetchMe();
    },
    [genreQuery]
  );

  return (
    <>
      <NavBar />
      <Aside />
      <ResultsBar results={results} />
    </>
  );
}

export default App;
