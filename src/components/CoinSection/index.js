import { useState } from "react";
import "./CoinSection.css";

function CoinSection({ coins }) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  function toggleSection() {
    setIsSectionOpen(!isSectionOpen);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2> ALL Coins</h2>
        <button
          style={{ height: "40px", margin: "10px" }}
          onClick={toggleSection}
        >
          Toggle Coins
        </button>
      </div>
      {isSectionOpen && (
        <section
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {coins.map((coin) => (
            <article className="coinArticle" key={coin.symbol}>
              <h3 style={{ textAlign: "center" }}>{coin.symbol}</h3>
              <h4 style={{ textAlign: "center" }}>Price:</h4>
              <h5 style={{ textAlign: "center" }}>
                {coin.lastPrice.toString().slice(0, 10)}
              </h5>
            </article>
          ))}
        </section>
      )}
    </>
  );
}

export default CoinSection;
