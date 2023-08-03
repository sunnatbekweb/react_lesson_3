import "./index.scss";

function Button({ type, content, classList }) {
  return (
    <div className="btn_wrapper">
      <button className="btn-success" type={type ? type : "button"}>
        {content ? content : "submit"}
      </button>

      <button className="btn-primary" type={type ? type : "button"}>
        {content ? content : "submit"}
      </button>

      <button className="btn-danger" type={type ? type : "button"}>
        {content ? content : "submit"}
      </button>

      <button className="btn-grey" type={type ? type : "button"}>
        {content ? content : "submit"}
      </button>
    </div>
  );
}

export default Button;
