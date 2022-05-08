import { h } from "preact";
import PickerItem from "./picker-item";

const Picker = ({ data, close, updateChoice }) => {
  return (
    <div className="overlayContainer">
      <div className="pickerContainer">
        <span>Choose where you are sending from</span>
        <div className="pickerItemContainer">
          {data.map((item) => (
            <PickerItem
              title={item.name}
              handleSelect={() => {
                updateChoice(item.name);
                close();
                return false;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picker;
