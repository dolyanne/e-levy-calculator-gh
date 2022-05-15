import { h } from "preact";

const FromPicker = ({ id, handleChange, title, theme }) => {
  return (
    <div className="fromGrid" tabIndex={3}>
      <div
        className="selectedText alignRight pointer"
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
      <div
        className={`selectedVisual ${theme} pointer`}
        role="button"
        onClick={(event) => handleChange(event, id)}
      />
    </div>
  );
};

FromPicker.defaultProps = {
  theme: "",
};

export default FromPicker;
