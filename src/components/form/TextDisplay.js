import { h } from "preact";

const TextDisplay = ({ className, children }) => {
  return <span className={`displayText ${className}`}>{children}</span>;
};

TextDisplay.defaultProps = {
  className: "",
};

export default TextDisplay;
