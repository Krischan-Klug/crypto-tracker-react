import { useState } from "react";

function FavouriteCoins({ favouriteCoins, onToggleFavourite }) {
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
        <h2>Favourite Coins</h2>
        <button onClick={() => toggleSection()}>Toggle Coins</button>
      </div>
      {isSectionOpen && (
        <section>
          {favouriteCoins.map((coin) => (
            <article
              className="coinArticle"
              key={coin.symbol}
              onClick={() => onToggleFavourite(coin.symbol)}
            >
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

export default FavouriteCoins;
