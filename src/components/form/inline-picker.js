import { h } from "preact";

const InlinePicker = ({ title }) => {
  return (
    <div className={`pickerItem`} role="button">
      <span className="pickerContent">{title}</span>
    </div>
  );
};

export default InlinePicker;
