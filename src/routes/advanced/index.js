import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import GridItem from "../../components/containers/GridItem";
import ItemGroup from "../../components/containers/ItemGroup";
import MainContainer from "../../components/containers/MainContainer";
import PickerArrow from "../../components/form/PickerArrow";
import InlinePicker from "../../components/form/InlinePicker";
import Picker from "../../components/form/Picker";
import TextField from "../../components/form/TextField";
import { platforms } from "../../data/platforms";
import {
  getElevyCharge,
  exemption,
  getTaxableAmount,
  elevyTax,
  calculatePlatformCharge,
} from "../../utils/calculations";
import ChargeLabel from "../../components/form/ChargeLabel";
import TextDisplay from "../../components/form/TextDisplay";
import Charge from "../../components/form/Charge";
import Disclaimer from "../../components/global/Disclaimer";
import FromPicker from "../../components/form/FromPicker";
import ToPicker from "../../components/form/ToPicker";

const Advanced = ({ showSimple }) => {
  // state
  const [amount, setAmount] = useState("");
  const [previousAmount, setPreviousAmount] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [pickerType, setPickerType] = useState("");
  const [transferAmount, setTransferAmount] = useState(0);
  const [elevyAmount, setElevyAmount] = useState(0);
  const [sendingFrom, setSendingFrom] = useState("mtn");
  const [sendingTo, setSendingTo] = useState("mtn");
  const [platformCharge, setPlatformCharge] = useState(0);

  const pickerData = {
    from: {
      pickerTitle: "You are sending money using:",
      updateChoice: setSendingFrom,
    },
    to: {
      pickerTitle: "You are sending money to someone with:",
      updateChoice: setSendingTo,
    },
  };

  // Effects
  useEffect(() => {
    if (amount == "") {
      setTransferAmount(0);
      setElevyAmount(0);
    } else if (previousAmount !== "") {
      let exempt = exemption(previousAmount);
      let taxableAmount = getTaxableAmount(amount, exempt);
      let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
      const platformCharge = calculatePlatformCharge(
        sendingFrom,
        sendingTo,
        amount
      );
      let totalTransferAmount = amount + elevyCharge + platformCharge;

      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
      setPlatformCharge(platformCharge);
    } else if (amount > 0) {
      let exempt = exemption(0);
      let taxableAmount = getTaxableAmount(amount, exempt);
      let elevyCharge = getElevyCharge(taxableAmount, elevyTax);
      const platformCharge = calculatePlatformCharge(
        sendingFrom,
        sendingTo,
        amount
      );
      let totalTransferAmount = amount + elevyCharge + platformCharge;

      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
      setPlatformCharge(platformCharge);
    } else {
      setTransferAmount(amount);
      setElevyAmount(0);
    }
  }, [amount, previousAmount, sendingFrom, sendingTo]);

  // event handlers
  const handleChange = (event, callback) => {
    const parsedAmount = parseInt(event.target.value.replaceAll(",", ""), 10);
    if (!isNaN(parsedAmount)) {
      callback(parsedAmount);
    } else {
      callback("");
    }
  };

  const handlePickerChange = (event, selection) => {
    console.log(selection);
    setPickerType(selection);
    setShowPicker(true);
  };

  return (
    <MainContainer>
      <form className="gridContainer" method="POST">
        <GridItem className="gridItemFull">
          <div className="inputGroup centerFlex">
            <h1 className="displayText">E-LEVY CALCULATOR</h1>
          </div>
        </GridItem>

        <GridItem className="gridItemFullMobileOnly">
          <ItemGroup>
            <TextField
              label="You want to send:"
              id="amount"
              placeholder="0"
              inputProps={{
                pattern: "[0-9,.]",
                inputMode: "numeric",
                required: true,
                value: amount.toLocaleString("en-US"),
                onInput: (e) => handleChange(e, setAmount),
              }}
            />
          </ItemGroup>
        </GridItem>

        <GridItem className="gridItemFullMobileOnly">
          <ItemGroup>
            <TextField
              label="You have already sent today: (optional)"
              id="previousAmount"
              placeholder="0"
              inputProps={{
                pattern: "[0-9,.]",
                inputMode: "numeric",
                value: previousAmount.toLocaleString("en-US"),
                onInput: (e) => handleChange(e, setPreviousAmount),
              }}
            />
          </ItemGroup>
        </GridItem>

        {/* Platform Picker */}
        <GridItem className="gridItemFull">
          <ItemGroup className="pickerRow">
            <div className="platformPickerGrid">
              <FromPicker
                title={platforms.get(sendingFrom).name}
                theme={platforms.get(sendingFrom).theme}
                id="from"
                handleChange={handlePickerChange}
              />
              <PickerArrow />
              <ToPicker
                title={platforms.get(sendingTo).name}
                theme={platforms.get(sendingTo).theme}
                id="to"
                handleChange={handlePickerChange}
              />
            </div>
          </ItemGroup>
        </GridItem>

        {/* Charges */}
        <GridItem className="noMargin">
          <ItemGroup className="divider chargePadding">
            <ChargeLabel className="alignRight" label="E-Levy Charge" />
            <TextDisplay className="alignRight">
              <Charge value={elevyAmount} />
            </TextDisplay>
          </ItemGroup>
        </GridItem>
        <GridItem className="noMargin">
          <ItemGroup className="chargePadding">
            <ChargeLabel
              label={`${platforms.get(sendingFrom).company} Charge`}
            />
            <TextDisplay>
              <Charge value={platformCharge} />
            </TextDisplay>
          </ItemGroup>
        </GridItem>

        {/* Payment Amount and Switcher */}
        <GridItem className="centerFlex gridItemFull">
          <ItemGroup>
            <ChargeLabel className="alignCenter" label="You will pay:" />
            <TextDisplay>
              <Charge className="charge" value={transferAmount} />
            </TextDisplay>
          </ItemGroup>
        </GridItem>
        <GridItem className="gridItemFull">
          <ItemGroup className="centerFlex">
            <button
              className="labelText button"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                showSimple();
                return false;
              }}
            >
              Calculate E-Levy Only
            </button>
          </ItemGroup>
        </GridItem>

        {/* Picker */}
        {showPicker && (
          <Picker
            data={platforms}
            selectedPicker={pickerType}
            title={pickerData[pickerType].pickerTitle}
            close={() => setShowPicker(false)}
            updateChoice={pickerData[pickerType].updateChoice}
          />
        )}

        {/* Disclaimer */}
        <GridItem className="gridItemFull">
          <ItemGroup className="centerFlex">
            <Disclaimer />
          </ItemGroup>
        </GridItem>
      </form>
    </MainContainer>
  );
};

export default Advanced;
