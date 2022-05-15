import { h } from "preact";

const ToPicker = ({ id, handleChange, title, theme }) => {
  return (
    <div className="toGrid" tabIndex={4}>
      <div
        className={`selectedVisual ${theme} pointer`}
        role="button"
        onClick={(event) => handleChange(event, id)}
      />
      <div
        className="selectedText pointer"
        role="button"
        onClick={(event) => handleChange(event, id)}
      >
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

ToPicker.defaultProps = {
  theme: "",
};

export default ToPicker;
