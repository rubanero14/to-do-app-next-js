const Svg = (props) => {
  return (
    <div title={props.title} className={props.wrapper}>
      <svg
        viewBox={props.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="16"
        className={props.className}
      >
        <path d={props.d}></path>
      </svg>
    </div>
  );
};

export default Svg;
