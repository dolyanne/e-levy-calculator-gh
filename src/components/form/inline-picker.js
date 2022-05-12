import { h } from "preact";

const InlinePicker = ({ title }) => {
  return (
    <div className={`inlinePickerItem`}>
      <div className="selectedVisual" />
      <div className="selectedText">
        <span className="selectedPlatform">MTN MoMo</span>
        <span role="button" className="togglePicker">
          Tap to change
        </span>
      </div>
    </div>
  );
};

export default InlinePicker;
