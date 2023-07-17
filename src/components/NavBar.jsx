import { useEffect } from "react";
import { useRef } from "react";

function NavBar() {


  return (
    <>
      <nav className="navbar bg-neutral-900">
        <div className="container-fluid">
          <a className="navbar-brand text-primary">D</a>
          <Search />
          <a href="https://github.com/sauravmeghwal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="black"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  );
}
function Search() {
    const inputEl = useRef(null);
    useEffect(function () {
      inputEl.current.focus();
    }, []);
  return (

      <div
        className="searchBar"
        style={{
          display: "flex",
          width: '30rem',
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
          value=""
          style={{
            width: '100%',
            height: "2.8rem",
            background: "black",
            outline: "none",
            border: "none",
            borderRadius: "1.625rem",
            padding: "0 3.5rem 0 1.5rem",
            fontSize: "1rem",
          }}
          ref={inputEl}
        />
        <button
          id="searchQuerySubmit"
          type="submit"
          name="searchQuerySubmit"
          style={{
            width: "3.5rem",
            height: "2.8rem",
            marginLeft: "-3.5rem",
            background: "none",
            border: "none",
            outline: "none",
          }}
        >
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </div>
  );
}



export default NavBar;
