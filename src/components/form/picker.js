import { h } from "preact";
import PickerItem from "./picker-item";

const Picker = ({ title, data, close, updateChoice, updateChoiceForView }) => {
  return (
    <div className="overlayContainer" onClick={() => close()}>
      <div className="pickerContainer">
        <span className="labelText">{title}</span>
        <div className="pickerItemContainer">
          {data.map((item) => (
            <PickerItem
              title={item.name}
              customTheme={item.customTheme}
              handleSelect={() => {
                updateChoice(item.key);
                updateChoiceForView(item.name);
                close();
                return false;
              }}
            />
          ))}
          <span
            role="button"
            onClick={() => {
              updateChoice("");
              updateChoiceForView("");
              close();
              return false;
            }}
            className="labelText pointer"
          >
            Clear
          </span>
        </div>
      </div>
    </div>
  );
};

export default Picker;
