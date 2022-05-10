import { h } from "preact";

const GridItem = ({ extraClasses, children }) => {
  return (
    <div className={`gridItem ${!!extraClasses ? extraClasses : ""}`}>
      {children}
    </div>
  );
};

export default GridItem;
