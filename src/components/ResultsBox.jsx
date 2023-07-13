import Skeleton from "react-loading-skeleton";

function ResultsBox({ data }) {
  return (
    <div
      className="card text-bg-dark"
      style={{
        height: "33rem",
        border: "none",
        width: "61%",
        position: "relative",
        margin: "3rem",
      }}
    >
      {data? <img
        src={data.image_background}
        className="card-img "
        alt="..."
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />: <Skeleton/>}
    </div>
  );
}

export default ResultsBox;
