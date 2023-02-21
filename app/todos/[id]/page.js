import Link from "next/link";
import Card from "@/components/Card/Card";
import Svg from "@/components/Svg/Svg";
import Button from "@/components/Button/Button";

import styles from "./page.module.css";

// Helper function to get todo lists from db
async function getTodoItem(id) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/todos/records/${id}`,
    { cache: "no-store" }
  );
  const todo = await res.json();
  return todo;
}

const TodoItem = async ({ params }) => {
  const todo = await getTodoItem(params.id);

  return (
    <>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-12 col-md-4 mb-3">
          <Button buttonType="link" link="/" className={styles.button}>
            <Svg
              wrapper="me-1"
              viewBox="0 0 512 512"
              d="M32.5 224H24c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L82.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L169 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H32.5z"
            />
            Back to home
          </Button>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <Card className={styles.todo}>
          <h3 className={styles["todo-title"]}>Task ID: {todo.id}</h3>
          <hr className={styles.line} />
          <h6 className={styles["todo-title"]}>{todo.title}</h6>
          <p className={styles["todo-description"]}>{todo.description}</p>
          <div className={styles["icon-wrapper"]}>
            <Link className={styles.link} href={"/todos/" + todo.id + "/edit"}>
              <Svg
                className={styles.icon}
                title={`Edit ${todo.title}`}
                viewBox="0 0 448 512"
                d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
              />
            </Link>
            <Link
              className={styles.link}
              href={"/todos/" + todo.id + "/delete"}
            >
              <Svg
                className={"me-0 " + styles.icon}
                title={`Delete ${todo.title}`}
                viewBox="0 0 512 512"
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TodoItem;
