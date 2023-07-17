import styled from "styled-components";
import { useState } from "react";
import results from "./Genra";
import PropTypes from "prop-types";

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 13px;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px -2px black;
  }
`;

AsideBar.propTypes = {
  setGenres: PropTypes.func.isRequired,
};

function AsideBar({ setGenres }) {
  return (
    <>
      <aside
        style={{
          paddingLeft: "0.1rem",
          minWidth: "13rem",
          background: "#161616",
          marginRight: '2rem',
          maxHeight: "80vh",
          borderRadius: "17px",
          position: "sticky",
          left: "1rem",
          top: "2rem",
          zIndex: 3,
          overflow: "hidden scroll",
        }}
      >
        <ul className="list-unstyled" style={{ maxWidth: "230px" }}>
          <TheList results={results} setGenres={setGenres} />
        </ul>
      </aside>
    </>
  );
}

function TheList({ results, setGenres }) {
  return results.map((data) => (
    <ListPrototype data={data} key={data.id} setGenres={setGenres} />
  ));
}

ListPrototype.propTypes = {
  data: PropTypes.objectOf.isRequired,
  setGenres: PropTypes.func.isRequired,
};
function ListPrototype({ data, setGenres }) {
  const [active, setActive] = useState(false);

  return (
    <List
      className={active ? "active" : ""}
      role="button"
      style={{
        background: active && "black",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setGenres({ type: "updateGenre", payload: data.id })}
    >
      <img src={data.image_background} alt={data.name} />
      <h4 className="game-name fs-6 fw-semibold fw-normal text-white-50">
        {data.name}
      </h4>
    </List>
  );
}
export default AsideBar;
