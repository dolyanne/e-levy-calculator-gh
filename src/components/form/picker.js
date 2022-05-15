import { h } from "preact";
import PickerItem from "./PickerItem";

const Picker = ({ data, title, updateChoice, close }) => {
  return (
    <div className="overlayContainer" onClick={() => close()}>
      <div className="pickerContainer">
        <span className="close pointer" role="button" onClick={() => close()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
        <div className="pickerTitle alignCenter">
          <span className="labelText">{title}</span>
        </div>
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
