import CoinSection from "../CoinSection";
import Searchbar from "../Searchbar";

function Main({ coins }) {
  return (
    <>
      <Searchbar />
      <CoinSection coins={coins} />
    </>
  );
}

export default Main;
