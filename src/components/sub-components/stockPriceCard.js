import React from "react";
import StockList from "./listOfStocks";

const PriceCard = ({ curPrice, priceChange, lastPriceClose, symbol }) => (
  <div className="mdc-card my-card my-card-content">
    <div className="mdc-card__primary-action " tabindex="0">
      <div className="stockTitle"> {StockList().stockList[symbol]}</div>
      <span className="stockSymbol">{symbol}</span>
    </div>
    <div className="stockCurPrice">cmp {curPrice}</div>
    <div
      className="stockPriceChange"
      style={priceChange > 0 ? { color: "#16a596" } : { color: "#fd3a69" }}
    >
      {!priceChange ? "Loading..." : parseFloat(priceChange).toFixed(2)}
    </div>
    <div
      className="stockPercentChange"
      style={priceChange > 0 ? { color: "#16a596" } : { color: "#f05454" }}
    >
      {!priceChange
        ? "Loading..."
        : parseFloat(priceChange / Number(lastPriceClose)).toFixed(2) * 100}
      %
    </div>
  </div>
);

export default PriceCard;
