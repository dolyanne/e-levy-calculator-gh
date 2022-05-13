import { h } from "preact";

const GridItem = ({ className, children }) => {
  return <div className={`gridItem ${className}`}>{children}</div>;
};

GridItem.defaultProps = {
  className: "",
};

export default GridItem;
