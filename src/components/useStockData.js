import { useState, useEffect } from "react";

const useStockData = (symbol, url) => {
  const [value, setValue] = useState({
    error: false,
    isLoaded: false,
    curPriceClose: "-",
    lastPriceClose: "-"
  });

  useEffect(() => {
    fetch(url + symbol + "&apikey=GE9U6DKF3BZ6S2Q3")
      .then((promise) => promise.json())
      .then(
        (data) => {
          setValue({
            error: false,
            isLoaded: true,
            curPriceClose:
              data["Time Series (Daily)"]["2021-02-04"]["5. adjusted close"],
            lastPriceClose:
              data["Time Series (Daily)"]["2021-02-05"]["5. adjusted close"]
          });
        },
        (error) => {
          setValue({
            error: true,
            isLoaded: false,
            curPriceClose: "-",
            lastPriceClose: "-"
          });
        }
      );
    return () => {
      setValue({
        error: false,
        isLoaded: true,
        curPriceClose: "loading",
        lastPriceClose: "-"
      });
    };
  }, [symbol, url]);
  return value;
};

export default useStockData;
