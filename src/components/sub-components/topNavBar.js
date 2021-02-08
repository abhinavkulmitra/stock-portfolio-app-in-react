import React from "react";

const TopNavBar = ({ title }) => (
  <header className="mdc-top-app-bar">
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <span className="mdc-top-app-bar__title">{title}</span>
      </section>
    </div>
  </header>
);
export default TopNavBar;
