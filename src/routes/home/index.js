import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

const Home = () => {
  const elevyTax = 0.015; //1.5/100
  const [amount, setAmount] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);
  const [elevyAmount, setElevyAmount] = useState(0);

  useEffect(() => {
    if (amount != "") {
      if (amount > 100) {
        console.log(amount);
        let taxableAmount = amount - 100;
        let elevyCharge = taxableAmount * elevyTax;
        let totalTransferAmount = amount + elevyCharge;
        console.log(elevyCharge);
        setTransferAmount(totalTransferAmount);
        setElevyAmount(elevyCharge);
      } else {
        setTransferAmount(amount);
        setElevyAmount(0);
      }

      console.log("checking");
      console.log("customer amount", amount);
    }
  }, [amount]);

  const handleChange = (event) => {
    setAmount(parseInt(event.target.value));
  };
  return (
    <main className="mainContainer">
      <div className="gridContainer">
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <span className="displayText">E-LEVY CALCULATOR</span>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <label for="amount" className="labelText">
              You want to send:
            </label>
            <div>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleChange}
                className="inputField"
                id="amount"
              />
              <span className="currency">GHS</span>
            </div>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <label for="transferAmount" className="labelText">
              You will pay:
            </label>
            <div>
              <input
                type="text"
                value={`${transferAmount.toFixed(2)}`}
                readOnly
                name="transferAmount"
                className="inputField inputFieldEmphasis"
                id="transferAmount"
              />
              <span className="currency">GHS</span>
            </div>
          </div>
        </div>
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <span className="labelText">You are being charged as E-Levy:</span>
            <span className="displayText charge">
              + GHS {`${elevyAmount.toFixed(2)}`}{" "}
            </span>
            <span className="labelText">Rate: 1.5%, first 100GHS exempt</span>
          </div>
        </div>
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <span className="disclaimer">
              Disclaimer: Please Note while we did our best to provide accurate
              results, we cannot be held responsible for differences in
              real-world charges.
            </span>
          </div>
        </div>
      </div>
      {/* <span className="footer">Made with love</span> */}
    </main>
  );
};

export default Home;
