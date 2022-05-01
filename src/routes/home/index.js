import { h } from "preact";
import { useState } from "preact/hooks";
import style from "./style.css";

const Home = () => {
  const elevyTax = 0.015; //1.5/100
  const [amount, setAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [elevyAmount, setElevyAmount] = useState(0);

  const handleCheck = (event) => {
    event.preventDefault();
    //assuming it's first transfer of the day
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
  };

  const handleChange = (event) => {
    setAmount(parseInt(event.target.value));
  };
  return (
    <div class={style.home}>
      <div class={style.flexMain}>
        <form onSubmit={handleCheck} method="POST">
          <div class={style.flexRow}>
            <div class={style.flexItem}>
              <label>
                Amount (GHS):{" "}
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div class={style.flexItem}>
              <label>
                Total due (GHS):
                <input
                  type="text"
                  value={`${transferAmount.toFixed(2)}`}
                  readOnly
                  name="transferAmount"
                />
              </label>
            </div>
          </div>

          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              margin: "10px",
            }}
          >
            E-Levy (GHS): {`${elevyAmount.toFixed(2)}`}
          </div>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              margin: "10px",
            }}
          >
            <button type="submit">Check E-Levy</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
