import React from "react";
import StockList from "./listOfStocks";

export const AddedStockInPortfolio = [];
window.localStorage = AddedStockInPortfolio;

const AddStockForm = ({
  inputRef,
  symbolProp,
  buyPrice,
  setBuyPrice,
  buyQuantity,
  setBuyQuantity
}) => {
  const AddStock = (e) => {
    if ((buyPrice !== "") | (buyQuantity !== "")) {
      alert(
        `added! Stock name: ${symbolProp} Buy price: ${buyPrice}  Quantity: ${buyQuantity}`
      );
      let anObjectOfData = {
        "stock name": StockList().stockList[symbolProp],
        symbol: symbolProp,
        "buy price": buyPrice,
        "buy quantity": buyQuantity
      };
      AddedStockInPortfolio.push(anObjectOfData);

      console.log(AddedStockInPortfolio);

      setBuyPrice("");
      setBuyQuantity("");
    } else alert("Add the price and quantity !");
    e.preventDefault();
  };
  return (
    <form>
      <div className="formComponent">
        <div className="disabledSymbolField">
          <label class="mdc-text-field mdc-text-field--filled mdc-text-field--disabled">
            <span class="mdc-text-field__ripple"></span>
            <span class="mdc-floating-label" id="my-label-id">
              {StockList().stockList[symbolProp]} <br /> ({symbolProp})
            </span>
            <input
              class="mdc-text-field__input"
              type="text"
              aria-labelledby="my-label-id"
              disabled
            />
            <span class="mdc-line-ripple"></span>
          </label>
        </div>
        <div className="buyPriceTextField">
          <label class="mdc-text-field mdc-text-field--outlined">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading">$</span>
              <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label"></span>
              </span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input
              type="number"
              class="mdc-text-field__input"
              aria-labelledby="my-label-id"
              value={buyPrice}
              placeholder={buyPrice}
              id="my-label-id"
              ref={inputRef}
              onChange={(e) => setBuyPrice(e.target.value)}
            />
          </label>
        </div>
        <div className="quantityTextField">
          <label class="mdc-text-field mdc-text-field--outlined">
            <span class="mdc-notched-outline">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label"></span>
              </span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
            <input
              type="text"
              class="mdc-text-field__input"
              aria-labelledby="my-label-id"
              value={buyQuantity}
              id="my-label-id"
              placeholder="Quantity"
              onChange={(e) => setBuyQuantity(e.target.value)}
            />
          </label>
        </div>
        <div className="btnForm">
          <button
            class="mdc-button mdc-button--outlined"
            onClick={(e) => AddStock(e)}
          >
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">ADD</span>
            <i class="material-icons mdc-button__icon" aria-hidden="true">
              add to portfolio
            </i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddStockForm;
