import Link from "next/link";
import Card from "@/components/Card/Card";
import Svg from "@/components/Svg/Svg";

import styles from "./page.module.css";

// Helper function to get todo lists from db
async function getTodoLists() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/todos/records",
    { cache: "no-store" }
  );
  const todos = await res.json();
  return todos.items;
}

async function Todos() {
  const todos = await getTodoLists();
  return (
    <>
      {todos.length > 0 &&
        todos.map((data) => (
          <div
            className="col-12 col-md-3 col-lg-2 mb-3"
            key={data.id}
            id={data.id}
          >
            <Link href={"/todos/" + data.id}>
              <Card className={styles.todo}>
                <h3 className={styles["todo-title"]}>{data.title}</h3>
                <Svg
                  className={styles.icon}
                  title={`View ${data.title}`}
                  viewBox="0 0 512 512"
                  d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"
                />
              </Card>
            </Link>
          </div>
        ))}
    </>
  );
}

export default Todos;
