import NavBar from "./components/navbar/NavBar";
import ResultsBar from "./components/results/Results";
import { FetchContext } from "./logicalComponents/FetchContext";

function App() {
  return (
    <>
      <FetchContext>
        <NavBar />
        <ResultsBar />
      </FetchContext>
    </>
  );
}

export default App;
