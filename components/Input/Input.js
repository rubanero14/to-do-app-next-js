const Input = (props) => {
  return (
    <>
      {props.inputtype === "input" && (
        <input
          className={props.className}
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      )}
      {props.inputtype === "textarea" && (
        <textarea
          className={props.className}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </>
  );
};

export default Input;
