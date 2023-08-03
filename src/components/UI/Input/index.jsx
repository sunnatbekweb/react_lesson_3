import "./style.scss";

function Input({ type, placeholder }) {
  return (
    <div className="input_wrapper">
      <input
        required
        className="input"
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : "enter text: "}
      />

      <input
        required
        className="input"
        type={type ? type : "email"}
        placeholder={placeholder ? placeholder : "enter email: "}
      />

      <input
        required
        className="input"
        type={type ? type : "password"}
        placeholder={placeholder ? placeholder : "enter password: "}
      />
    </div>
  );
}

export default Input;
