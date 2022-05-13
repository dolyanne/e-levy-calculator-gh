import { h } from "preact";

const ChargeLabel = ({ label, className }) => {
  return <span className={`labelText ${className}`}>{label}</span>;
};

ChargeLabel.defaultProps = {
  className: "",
};

export default ChargeLabel;
