import { h } from "preact";

const Charge = ({ className, value }) => {
  return (
    <span className={`chargeAlt ${className}`}>{`+ ${value.toLocaleString(
      "en-US",
      {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }
    )} GHS`}</span>
  );
};

Charge.defaultProps = {
  className: "",
};

export default Charge;
