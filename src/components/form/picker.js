import { h } from "preact";
import PickerItem from "./picker-item";

const Picker = ({ title, data, close, updateChoice, updateChoiceForView }) => {
  return (
    <div className="overlayContainer">
      <div className="pickerContainer">
        <span>{title}</span>
        <div className="pickerItemContainer">
          {data.map((item) => (
            <PickerItem
              title={item.name}
              handleSelect={() => {
                updateChoice(item.key);
                updateChoiceForView(item.name);
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
