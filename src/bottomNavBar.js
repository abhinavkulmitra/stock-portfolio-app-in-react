import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./components/home";
import Portfolio from "./components/portfolio";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingIcon from "@material-ui/icons/Shop";

export default function SimpleBottomNavigation({
  curPrice,
  lastPrice,
  symbol,
  setSymbol
}) {
  const [value, setValue] = useState(0);
  const [buyPrice, setBuyPrice] = useState("");
  const [buyQuantity, setBuyQuantity] = useState("");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            curPrice={curPrice}
            lastPrice={lastPrice}
            symbol={symbol}
            setSymbol={setSymbol}
            buyPrice={buyPrice}
            setBuyPrice={setBuyPrice}
            buyQuantity={buyQuantity}
            setBuyQuantity={setBuyQuantity}
          />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
      <div>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <Link to="/">
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon color="primary" />}
            />
          </Link>

          <Link to="/portfolio">
            <BottomNavigationAction
              label="Portfolio"
              icon={<ShoppingIcon color="primary" />}
            />
          </Link>
        </BottomNavigation>
      </div>
    </Router>
  );
}
