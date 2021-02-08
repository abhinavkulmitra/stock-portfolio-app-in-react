import React from "react";
import useStockData from "../useStockData";
import { AddedStockInPortfolio } from "./addStockForm";

function PrintCurPrice({ error, isLoaded, cur }) {
  if (error) return <div>Error occured</div>;
  else if (isLoaded) return <div>Loading</div>;
  else {
    return <div className="stockCurPrice">Qty. {cur["buy price"]}</div>;
  }
}

export default function ProfitLossCard() {
  const urlLastPrice = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=`;

  return AddedStockInPortfolio.map((cur) => {
    const { error, isLoaded, curPriceClose, lastPriceClose } = useStockData(
      cur["symbol"],
      urlLastPrice
    ); //custom hook here (inside a callBack function and a loop)
    const priceChange = curPriceClose - cur["buy price"];

    return (
      <div className="mdc-card my-card my-card-content">
        <div className="mdc-card__primary-action" tabindex="0">
          <div className="stockTitle">{cur["stock name"]}</div>
          <span className="stockSymbol">{cur["symbol"]}</span>
        </div>
        <PrintCurPrice error={error} inLoaded={isLoaded} cur={cur} />
        <div
          className="stockPriceChange"
          style={priceChange > 0 ? { color: "#16a596" } : { color: "#fd3a69" }}
        >
          P/L :{" "}
          {!priceChange ? "loading..." : parseFloat(priceChange).toFixed(2)}
        </div>
        <div
          className="stockPercentChange"
          style={priceChange > 0 ? { color: "#16a596" } : { color: "#f05454" }}
        >
          % returns :{" "}
          {!priceChange
            ? "loading..."
            : parseFloat(priceChange / cur["buy price"]).toFixed(2) * 100}
          %
        </div>
      </div>
    );
  });
}
