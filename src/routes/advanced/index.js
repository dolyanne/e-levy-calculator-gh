import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import GridItem from "../../components/containers/grid-item";
import MainContainer from "../../components/containers/main-container";
import Picker from "../../components/form/picker";
import { to, from } from "../../data/platforms";
import {
  getElevyCharge,
  exemption,
  getTaxableAmount,
  elevyTax,
  getPlatformCharge,
} from "../../utils/calculations";

const Advanced = ({ showSimple }) => {
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
  const [exempt, setExempt] = useState(100);
  const [platformCharge, setPlatformCharge] = useState(0);
  const [platformRate, setPlatformRate] = useState(0);
  const [platformExempt, setPlatformExempt] = useState(0);
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
      calculatePlatformCharge();
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
      setExempt(exempt);
    } else if (amount > 0) {
      let exempt = exemption(0);
      let taxableAmount = getTaxableAmount(amount, exempt);
      let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
      let totalTransferAmount = amount + elevyCharge;
      setExempt(exempt);
      calculatePlatformCharge();
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
    } else {
      setTransferAmount(amount);
      setElevyAmount(0);
    }
  }, [amount, previousAmount, sendingFrom, sendingTo]);

  const calculatePlatformCharge = () => {
    if (sendingFrom !== "" && sendingTo !== "") {
      const platformChargeData = getPlatformCharge({
        source: sendingFromKey,
        destination: sendingToKey,
        amount,
      });
      setPlatformCharge(platformChargeData.charge);
      setPlatformExempt(platformChargeData.exempt);
      setPlatformRate(platformChargeData.rate);
    } else if (sendingFrom !== "") {
      const platformChargeData = getPlatformCharge({
        destination: sendingFromKey,
        source: sendingFromKey,
        amount,
      });

      setPlatformCharge(platformChargeData.charge);
      setPlatformExempt(platformChargeData.exempt);
      setPlatformRate(platformChargeData.rate);
    }
  };

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
    <MainContainer>
      <form className="gridContainer" ref={elevyFormRef} method="POST">
        <GridItem extraClasses="gridItemFull">
          <div className="inputGroup centerFlex">
            <h1 className="displayText">E-LEVY CALCULATOR</h1>
          </div>
        </GridItem>
        <GridItem extraClasses="gridItemFullMobileOnly">
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
        </GridItem>

        <GridItem extraClasses="gridItem gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="previousAmount" className="labelText">
              You have already sent today: (optional)
            </label>
            <div>
              <input
                type="text"
                name="previousAmount"
                placeholder="0"
                pattern="[0-9,.]"
                inputMode="numeric"
                value={previousAmount.toLocaleString("en-US")}
                onInput={(e) => handleChange(e, setPreviousAmount)}
                className="inputField"
                id="previousAmount"
              />
              <span className="currency">GHS</span>
            </div>
          </div>
        </GridItem>
        <GridItem extraClasses="gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="sendingFrom" className="labelText">
              You are sending from: (optional)
            </label>
            <div>
              <input
                type="text"
                name="sendingFrom"
                placeholder="Click to Select"
                onFocus={(e) => handlePlatformChoice(e, "from")}
                readOnly
                value={sendingFrom}
                className={`inputFieldText`}
                id="sendingFrom"
              />
            </div>
          </div>
        </GridItem>
        <GridItem extraClasses="gridItemFullMobileOnly">
          <div className="inputGroup">
            <label for="sendingTo" className="labelText">
              You are sending to: (optional)
            </label>
            <div>
              <input
                type="text"
                name="sendingTo"
                placeholder="Click to Select"
                value={sendingTo}
                readOnly
                onFocus={(e) => handlePlatformChoice(e, "to")}
                className={`inputFieldText`}
                id="sendingTo"
              />
            </div>
          </div>
        </GridItem>
        <GridItem extraClasses="noMargin">
          <div className="inputGroup divider">
            <span className="labelText alignRight">E-Levy Charge:</span>
            <span className="displayText alignRight" ref={elevyChargeRef}>
              {`+ ${elevyAmount.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })} GHS`}
            </span>
            <span className="labelText small alignRight">
              1.5%, {exempt}GHS exempt
            </span>
          </div>
        </GridItem>
        <GridItem extraClasses="noMargin">
          <div className="inputGroup">
            <span className="labelText">Platform Charge:</span>
            <span className="displayText" ref={elevyChargeRef}>
              {`+ ${platformCharge.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })} GHS`}
            </span>
            <span className="labelText small">
              {`${platformRate}%, <${platformExempt}GHS exempt`}
            </span>
          </div>
        </GridItem>
        <GridItem extraClasses="centerFlex gridItemFull">
          <div className="inputGroup">
            <span className="labelText alignCenter">You will pay:</span>
            <span
              className="displayText payment charge alignCenter"
              ref={elevyChargeRef}
            >
              GHS{" "}
              {`${(elevyAmount + platformCharge + amount).toLocaleString(
                "en-US",
                {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                }
              )}`}
            </span>
          </div>
        </GridItem>
        <div className="gridItem gridItemFull">
          <div className="inputGroup centerFlex">
            <button
              className="labelText button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                showSimple();
                return false;
              }}
            >
              Show Simple
            </button>
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
        <GridItem extraClasses="gridItemFull">
          <div className="inputGroup centerFlex">
            <span className="disclaimer">
              Disclaimer: We did our best to provide accurate results, however
              you may experience differences in real-world usage.
            </span>
          </div>
        </GridItem>
      </form>
    </MainContainer>
  );
};

export default Advanced;
