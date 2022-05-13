import { h } from "preact";
import PickerItem from "./PickerItem";

const Picker = ({ data, title, updateChoice, close }) => {
  return (
    <div className="overlayContainer" onClick={() => close()}>
      <div className="pickerContainer">
        <span className="labelText">{title}</span>
        <div className="pickerItemContainer">
          {[...data.values()].map((item) => (
            <PickerItem
              key={item.key}
              title={item.name}
              theme={item.theme}
              handleSelect={() => {
                updateChoice(item.key);
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
