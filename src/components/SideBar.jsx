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

function SideBar() {
  return (
    <aside style={{ paddingLeft: "1rem" }}>
      <ul className="list-unstyled" style={{ maxWidth: "230px" }}>
        <TheList results={results} />
      </ul>
    </aside>
  );
}

function TheList({ results }) {
  return results.map((data) => <ListPrototype data={data} />);
}
function ListPrototype({ data }) {
  const [active, setActive] = useState(false);

  return (
    <List
      className={active ? "active" : ""}
      role="button"
      key={data.id}
      style={{
        border: active ? "2px solid" : "none",
        borderRadius: active ? "6px" : "none",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img src={data.image_background} alt={data.name} />
      <h4 className="game-name fs-6 fw-normal">{data.name}</h4>
    </List>
  );
}
export default SideBar;
