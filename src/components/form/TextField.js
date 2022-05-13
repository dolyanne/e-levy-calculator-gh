import { h } from "preact";

const TextField = ({ label, id, placeholder, inputProps }) => {
  return (
    <>
      <label for={id} className="labelText">
        {label}
      </label>
      <div>
        <input
          type="text"
          name={id}
          placeholder={placeholder}
          className="inputField"
          id={id}
          {...inputProps}
        />
        <span className="currency">GHS</span>
      </div>
    </>
  );
};

TextField.defaultProps = {
  label: "label",
  id: "",
  placeholder: "",
  inputProps: {},
};

export default TextField;
