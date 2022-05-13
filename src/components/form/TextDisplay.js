import { h } from "preact";

const TextDisplay = ({ className, children }) => {
  return <span className={`displayText ${className}`}>{children}</span>;
};

Text.defaultProps = {
  className: "",
};

export default TextDisplay;
