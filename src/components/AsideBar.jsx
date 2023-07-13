import styled from "styled-components";
import { useState } from "react";
import results from "./Genra";

const List = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 204px;
  padding: 0.5rem 0;
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    box-shadow: 1px 1px 4px -2px black;
  }
`;

function AsideBar({setGenres}) {
  return (
    <>
      <aside style={{ paddingLeft: "1rem", maxHeight: '80vh', overflowY:'scroll'}}>
        <ul className="list-unstyled" style={{ maxWidth: "230px" }}>
          <TheList results={results} setGenres={setGenres} />
        </ul>
      </aside>
    </>
  );
}

function TheList({ results, setGenres }) {
  return results.map((data) => <ListPrototype data={data} key={data.id} setGenres={setGenres} />);
}
function ListPrototype({ data, setGenres }) {
  const [active, setActive] = useState(false);

  return (
    <List
      className={active ? "active" : ""}
      role="button"
      style={{
        border: active ? "2px solid" : "none",
        borderRadius: active ? "6px" : "none",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={()=>setGenres(data.id)}
    >
      <img src={data.image_background} alt={data.name} />
      <h4 className="game-name fs-6 fw-normal">{data.name}</h4>
    </List>
  );
}
export default AsideBar;
