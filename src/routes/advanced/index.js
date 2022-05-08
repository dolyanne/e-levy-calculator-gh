import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import Picker from "../../components/form/picker";
import { to, from } from "../../data/platforms";
import {
  getElevyCharge,
  exemption,
  getTaxableAmount,
  elevyTax,
  getPlatformCharge,
} from "../../utils/calculations";

const Advanced = () => {
  const [amount, setAmount] = useState("");
  const [previousAmount, setPreviousAmount] = useState("");
  const [sendingFrom, setSendingFrom] = useState("");
  const [sendingFromKey, setSendingFromKey] = useState("");
  const [sendingTo, setSendingTo] = useState("");
  const [sendingToKey, setSendingToKey] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [pickerType, setPickerType] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);
  const [elevyAmount, setElevyAmount] = useState(0);
  const [platformCharge, setPlatformCharge] = useState(0);
  //const [elevyAmount, setElevyAmount] = useState(0);
  let elevyFormRef = useRef(null);
  let elevyChargeRef = useRef(null);

  useEffect(() => {
    if (amount == "") {
      setTransferAmount(0);
      setElevyAmount(0);
    } else if (previousAmount !== "") {
      let exempt = exemption(previousAmount);
      let taxableAmount = getTaxableAmount(amount, exempt);
      let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
      let totalTransferAmount = amount + elevyCharge;
      if (sendingFrom !== "" && sendingTo !== "") {
        setPlatformCharge(
          getPlatformCharge({
            source: sendingFromKey,
            destination: sendingToKey,
            amount,
          })
        );
      } else if (sendingTo !== "") {
        setPlatformCharge(
          getPlatformCharge({
            destination: sendingFromKey,
            source: sendingFromKey,
            amount,
          })
        );
      }
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
    } else if (amount > 0) {
      let exempt = exemption(0);
      let taxableAmount = getTaxableAmount(amount, exempt);
      let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
      let totalTransferAmount = amount + elevyCharge;
      if (sendingFrom !== "" && sendingTo !== "") {
        setPlatformCharge(
          getPlatformCharge({
            source: sendingFromKey,
            destination: sendingToKey,
            amount,
          })
        );
      } else if (sendingTo !== "") {
        setPlatformCharge(
          getPlatformCharge({
            destination: sendingFromKey,
            source: sendingFromKey,
            amount,
          })
        );
      }
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
    } else {
      setTransferAmount(amount);
      setElevyAmount(0);
    }
  }, [amount, previousAmount]);

  const handleChange = (event, callback) => {
    const parsedAmount = parseInt(event.target.value.replaceAll(",", ""), 10);
    if (!isNaN(parsedAmount)) {
      callback(parsedAmount);
    } else {
      // elevyFormRef.current.reportValidity();
      callback("");
    }
  };

  const handleTextChange = (event, callback) => {
    callback(event.target.value);
  };

  const handleTab = (event) => {
    if (event.keyCode == 13) {
      elevyChargeRef.current.focus();
    }
  };

  const handlePlatformChoice = (event, type) => {
    setShowPicker(true);
    setPickerType(type);
  };

  return (
    <main className="mainContainer">
      <form className="gridContainer" ref={elevyFormRef} method="POST">
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <h1 className="displayText">E-LEVY CALCULATOR</h1>
          </div>
        </div>
        <div className="gridItem gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="sendingFrom" className="labelText">
              You are sending from:
            </label>
            <div>
              <input
                type="text"
                name="sendingFrom"
                placeholder="Click to Select"
                onFocus={(e) => handlePlatformChoice(e, "from")}
                required
                readOnly
                value={sendingFrom}
                className="inputFieldText"
                id="sendingFrom"
              />
            </div>
          </div>
        </div>
        <div className="gridItem gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="sendingTo" className="labelText">
              You are sending to:
            </label>
            <div>
              <input
                type="text"
                name="sendingTo"
                placeholder="Click to Select"
                required
                value={sendingTo}
                readOnly
                onFocus={(e) => handlePlatformChoice(e, "to")}
                className="inputFieldText"
                id="sendingTo"
              />
            </div>
          </div>
        </div>
        <div className="gridItem gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="amount" className="labelText">
              You want to send:
            </label>
            <div>
              <input
                type="text"
                name="amount"
                placeholder="0"
                pattern="[0-9,.]"
                inputMode="numeric"
                required
                value={amount.toLocaleString("en-US")}
                onInput={(e) => handleChange(e, setAmount)}
                className="inputField"
                id="amount"
              />
              <span className="currency">GHS</span>
            </div>
          </div>
        </div>
        <div className="gridItem gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="previousAmount" className="labelText">
              You already sent today:
            </label>
            <div>
              <input
                type="text"
                name="previousAmount"
                placeholder="0"
                pattern="[0-9,.]"
                inputMode="numeric"
                required
                value={previousAmount.toLocaleString("en-US")}
                onInput={(e) => handleChange(e, setPreviousAmount)}
                className="inputField"
                id="previousAmount"
              />
              <span className="currency">GHS</span>
            </div>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <span className="labelText alignRight">E-Levy Charge:</span>
            <span
              className="displayText alignRight"
              tabIndex={2}
              ref={elevyChargeRef}
            >
              {`${elevyAmount.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })} GHS`}
            </span>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <span className="labelText">Platform Charge:</span>
            <span className="displayText" tabIndex={2} ref={elevyChargeRef}>
              {`${platformCharge.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })} GHS`}
            </span>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <span className="labelText">Total Charges:</span>
            <span
              className="displayText charge"
              tabIndex={2}
              ref={elevyChargeRef}
            >
              + GHS{" "}
              {`${(elevyAmount + platformCharge).toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}`}
            </span>
          </div>
        </div>
        <div className="gridItem">
          <div className="inputGroup">
            <span className="labelText">You will pay:</span>
            <span
              className="displayText charge"
              tabIndex={2}
              ref={elevyChargeRef}
            >
              + GHS{" "}
              {`${(elevyAmount + platformCharge + amount).toLocaleString(
                "en-US",
                {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                }
              )}`}
            </span>
          </div>
        </div>
        {showPicker && pickerType === "from" && (
          <Picker
            data={from}
            title="You are sending money from"
            close={() => setShowPicker(false)}
            updateChoiceForView={setSendingFrom}
            updateChoice={setSendingFromKey}
          />
        )}
        {showPicker && pickerType === "to" && (
          <Picker
            data={to}
            title="You are sending money to someone with"
            close={() => setShowPicker(false)}
            updateChoiceForView={setSendingTo}
            updateChoice={setSendingToKey}
          />
        )}
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <span className="disclaimer">
              Disclaimer: While we did our best to provide accurate results, we
              cannot be held responsible for differences in your real-world
              experience.
            </span>
          </div>
        </div>
      </form>
      {/* <span className="footer">Made with love</span> */}
    </main>
  );
};

export default Advanced;
