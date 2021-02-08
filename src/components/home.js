import React, { useRef } from "react";
import "../styles.css";
import TopNavBar from "./sub-components/topNavBar";
import AddStockForm from "./sub-components/addStockForm";
import StockList from "./sub-components/listOfStocks";
import PriceCard from "./sub-components/stockPriceCard";

function Home({
  curPrice,
  lastPrice,
  symbol,
  setSymbol,
  buyPrice,
  setBuyPrice,
  buyQuantity,
  setBuyQuantity
}) {
  const inputRef = useRef();
  const stockListArray = Object.keys(StockList().stockList);
  let priceChange = curPrice - lastPrice;

  function SelectBar() {
    return (
      <select
        name="stocks"
        id="stockSelect"
        onChange={(e) => {
          inputRef.current.focus();
          setSymbol(e.target.value);
        }}
      >
        {stockListArray.map((cur, index) => (
          <option value={cur} key={index}>
            {StockList().stockList[stockListArray[index]]}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <div className="topNav">
        <TopNavBar title="Stock Bucket" />
      </div>
      <div className="content">
        <div className="select">
          <SelectBar />
        </div>
        <div className="card">
          <PriceCard
            curPrice={curPrice}
            priceChange={priceChange}
            lastPriceClose={lastPrice}
            symbol={symbol}
          />
        </div>
        <div className="form">
          <AddStockForm
            inputRef={inputRef}
            symbolProp={symbol}
            buyPrice={buyPrice}
            setBuyPrice={setBuyPrice}
            buyQuantity={buyQuantity}
            setBuyQuantity={setBuyQuantity}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
