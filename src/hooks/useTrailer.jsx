import { useEffect, useReducer } from "react";
const initialState = {
  url: null,
  over: false,
  error: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "setUrl":
      return { ...state, url: action.payload };
    case "overToTrue":
      return { ...state, over: true };
    case "overToFalse":
      return { ...state, over: false };
    case "throwError":
      return { ...state, error: action.payload };
  }
}

export function useTrailer(id) {
  const [{ url, over, error }, dispatch] = useReducer(reducer, initialState);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const fetching = await fetch(
            `https://api.rawg.io/api/games/${id}/movies?key=c6f8b5ce943f406b91d0b988cd02f707`
          );

          if (!fetching) {
            throw new Error(`Something went wrong`);
          }

          const response = await fetching.json();

          if (response.count === 0) {
            throw new Error(`No trailers found`);
          }

          dispatch({
            type: "setUrl",
            payload: response?.results[0].data[480 || "max"],
          });
        } catch (err) {
          dispatch({ type: "throwError", payload: err.message });
        }
      }
      fetchData();
    },
    [id]
  );
  return { url, over, error, dispatch };
}
