import React, { useState } from "react";
import "./styles.css";
import useStockData from "./components/useStockData";
import SimpleBottomNavigation from "./bottomNavBar";

export default function App() {
  const [symbol, setSymbol] = useState("TSLA");
  const urlPriceData = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=`;
  const { error, isLoaded, curPriceClose, lastPriceClose } = useStockData(
    symbol,
    urlPriceData
  );

  if (error) return <p>Error happened</p>;
  else if (!isLoaded) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="App">
        <div className="bottomNav">
          <SimpleBottomNavigation
            curPrice={curPriceClose}
            lastPrice={lastPriceClose}
            symbol={symbol}
            setSymbol={setSymbol}
          />
        </div>
      </div>
    );
  }
}
