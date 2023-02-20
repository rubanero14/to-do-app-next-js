import Link from "next/link";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      {props.buttonType === "button" && (
        <button
          title={props.title}
          className={styles.button}
          type={props.type || "button"}
          onClick={props.onClick}
        >
          {props.value}
          {props.children}
        </button>
      )}
      {props.buttonType === "link" && (
        <Link
          title={props.title}
          className={styles.button}
          href={props.link}
          rel="noreferrer"
        >
          {props.value}
          {props.children}
        </Link>
      )}
    </>
  );
};

export default Button;
