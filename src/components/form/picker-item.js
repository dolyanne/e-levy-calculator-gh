import { h } from "preact";

const PickerItem = ({ title, handleSelect, customTheme }) => {
  return (
    <div
      className={`pickerItem ${!!customTheme ? customTheme : ""}`}
      role="button"
      onClick={handleSelect}
    >
      <span className="pickerContent">{title}</span>
    </div>
  );
};

PickerItem.defaultProps = {
  title: "N/A",
};

export default PickerItem;
