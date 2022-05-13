import { h } from "preact";

const ItemGroup = ({ className, children }) => {
  return <div className={`inputGroup ${className}`}>{children}</div>;
};

ItemGroup.defaultProps = {
  className: "",
};

export default ItemGroup;
