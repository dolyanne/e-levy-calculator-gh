import { h } from "preact";

const PickerItem = ({ title, handleSelect }) => {
  return (
    <div className="pickerItem" role="button" onClick={handleSelect}>
      <span>{title}</span>
    </div>
  );
};

PickerItem.defaultProps = {
  title: "N/A",
};

export default PickerItem;
