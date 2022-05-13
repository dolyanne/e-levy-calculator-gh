import { h } from "preact";

const InlinePicker = ({ id, handleChange, title, theme }) => {
  return (
    <div className={`inlinePickerItem`}>
      <div className={`selectedVisual ${theme}`} />
      <div className="selectedText">
        <span className="selectedPlatform">{title}</span>
        <span
          role="button"
          className="togglePicker pointer"
          onClick={(event) => handleChange(event, id)}
        >
          Tap to change
        </span>
      </div>
    </div>
  );
};

InlinePicker.defaultProps = {
  theme: "",
};

export default InlinePicker;
