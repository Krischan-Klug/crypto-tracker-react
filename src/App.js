import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Get data
    async function getData() {
      const response = await fetch(
        "https://api4.binance.com/api/v3/ticker/24hr"
      );
      const data = await response.json();
      setCoins(data);
      setIsLoading(false);
    }
    //Refresh data every 5sec
    const interval1 = setInterval(() => {
      getData();
      console.log(coins);
      console.log("refreshed coins!");
    }, 5000);

    return () => {
      console.log("cleanup");
      clearInterval(interval1);
    };
  });
  //Loading screen
  if (isLoading) {
    return (
      <>
        <br></br>
        <h3 style={{ textAlign: "center", marginTop: "50%" }}>
          Stealing you crypto...
        </h3>
        ;
      </>
    );
  }

  return (
    <>
      <Header />
      <Main coins={coins} />
      <Footer />
    </>
  );
}

export default App;
