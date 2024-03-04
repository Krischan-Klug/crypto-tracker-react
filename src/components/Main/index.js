import CoinSection from "../CoinSection";
import Searchbar from "../Searchbar";
import FavouriteCoins from "../FavouriteCoins";
import { useState } from "react";

function Main({ coins }) {
  const [favouriteCoins, setFavouriteCoins] = useState([]);

  function handleToggleFavourite(symbol) {
    const updatedCoins = coins.map((coin) =>
      coin.symbol === symbol
        ? { ...coin, isFavourite: !coin.isFavourite }
        : coin
    );
    const newFavouriteCoins = updatedCoins.filter((coin) => coin.isFavourite);
    setFavouriteCoins((prevFavourites) => [
      ...prevFavourites,
      ...newFavouriteCoins,
    ]);
    console.log(favouriteCoins);
  }

  return (
    <>
      <Searchbar />
      <CoinSection coins={coins} onToggleFavourite={handleToggleFavourite} />
      <FavouriteCoins
        coins={coins}
        favouriteCoins={favouriteCoins}
        onToggleFavourite={handleToggleFavourite}
      />
    </>
  );
}

export default Main;
