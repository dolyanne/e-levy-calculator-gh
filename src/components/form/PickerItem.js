import { h } from "preact";

const PickerItem = ({ title, handleSelect, theme }) => {
  return (
    <div className={`pickerItem ${theme}`} role="button" onClick={handleSelect}>
      <span className="pickerContent"></span>
    </div>
  );
};

PickerItem.defaultProps = {
  title: "",
  theme: "",
};

export default PickerItem;
