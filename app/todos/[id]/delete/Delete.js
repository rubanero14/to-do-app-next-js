"use client";

import { useEffect, useState } from "react";
import Svg from "@/components/Svg/Svg";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "./Delete.module.css";

const DeletePage = async (props) => {
  const [todoId, setId] = useState(props.id);

  console.log(todoId);
  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch("/api/deleteTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: todoId,
      }),
    });
  };

  return (
    <>
      <h1 className={"d-flex " + styles.title}>Task ID: {todoId}</h1>
      <span class="alert-text d-block mb-3">
        Are you sure to delete this task?
      </span>
      <form onSubmit={submitHandler}>
        <Input type="hidden" inputtype="input" value={todoId} />
        <Button className={styles.button} buttonType="button" type="submit">
          <Svg
            className="me-2"
            viewBox="0 0 448 512"
            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
          />
          Delete
        </Button>
      </form>
    </>
  );
};

export default DeletePage;
