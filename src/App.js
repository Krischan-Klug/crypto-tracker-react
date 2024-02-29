import "./App.css";

import { useEffect, useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api4.binance.com/api/v3/ticker/24hr"
      );
      const data = await response.json();

      return data;
    }

    async function dataTest() {
      const allCoins = await getData();
      setCoins(allCoins);
    }

    const interval1 = setInterval(() => {
      dataTest();
      console.log(coins);
      console.log("interval start");
    }, 5000);

    return () => {
      console.log("cleanup");
      clearInterval(interval1);
    };
  });

  return (
    <>
      <Header />
      <Main coins={coins} />
      <Footer />
    </>
  );
}

export default App;
