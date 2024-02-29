import Searchbar from "../Searchbar";
import { useState } from "react";

function Main({ coins }) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  function toggleSection() {
    setIsSectionOpen(!isSectionOpen);
  }

  return (
    <>
      <Searchbar />
      <div style={{ textAlign: "center" }}>
        <h2> ALL Coins</h2>
        <button onClick={toggleSection}>Toggle Coins</button>
      </div>

      <br></br>
      {isSectionOpen && (
        <section
          style={{
            margin: "1rem",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {coins.map((coin) => (
            <article
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "2px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "1px solid black",
              }}
              key={coin.symbol}
            >
              <h3>{coin.symbol}</h3>
              <p>Price:</p>
              <p>{coin.lastPrice}</p>
            </article>
          ))}
        </section>
      )}
    </>
  );
}

export default Main;
