import React from "react";
import "../styles.css";
import ProfitLossCard from "./sub-components/ProfitLossCard";
import TopNavBar from "./sub-components/topNavBar";

const Portfolio = () => (
  <div className="portfolioMain">
    <div className="PortfolioTopBar">
      <TopNavBar title={"Stock Bucket- Portfolio"} />
    </div>
    <div className="PortfolioProfitLossCard">
      <ProfitLossCard />
    </div>
  </div>
);
export default Portfolio;
