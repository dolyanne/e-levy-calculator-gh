
import { h } from "preact";

const PickerArrow = () => {
  return (
    <div className="arrowContainer">
      <span className="arrow">
        <span className="alternateText">to</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right"
        >
          <path d="M5 12L19 12" />
          <path d="M12 5L19 12 12 19" />
        </svg>
      </span>
    </div>
  );
};

export default PickerArrow;
