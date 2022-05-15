import { h } from "preact";

const Charge = ({ className, value, chargeProps }) => {
  return (
    <span
      {...chargeProps}
      className={`chargeAlt ${className}`}
    >{`+ ${value.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })} GHS`}</span>
  );
};

Charge.defaultProps = {
  className: "",
  chargeProps: {},
};

export default Charge;
