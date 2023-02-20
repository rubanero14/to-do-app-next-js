"use client";

import { useState } from "react";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Svg from "@/components/Svg/Svg";
import styles from "./CreateTodo.module.css";

const CreateToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const submitHandler = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/todos/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    console.log(title, description);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex justify-content-center align-items-center">
          <Card className={styles.wrapper}>
            <h1 className={styles.title}>Create New Task</h1>
            <form onSubmit={submitHandler}>
              <Input
                className="form-control mb-2"
                type="text"
                inputtype="input"
                placeholder="Enter task name here.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                className="form-control mb-2"
                type="text"
                inputtype="textarea"
                placeholder="Enter task description here.."
                onChange={(e) => setDesc(e.target.value)}
                value={description}
              />
              <Button
                className={styles.button}
                buttonType="button"
                type="submit"
              >
                <Svg
                  className="me-1"
                  viewBox="0 0 448 512"
                  d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                />
                Create
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateToDo;
