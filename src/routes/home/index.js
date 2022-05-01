import { h } from "preact";
import style from "./style.css";

const Home = () => {
  const handleCheck = () => {
    console.log("checking");
  };
  return (
    <div class={style.home}>
      <div class={style.flexMain}>
        <form onSubmit={handleCheck}>
          <div class={style.flexRow}>
            <div class={style.flexItem}>
              <label>
                Amount: <input type="number" name="amount" />
              </label>
            </div>
            <div class={style.flexItem}>
              <label>
                Total due:
                <input type="number" name="total_charge" />
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
            E-Levy: 15GHS
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
