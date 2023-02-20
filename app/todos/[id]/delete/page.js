import DeletePage from "./Delete";
import Svg from "@/components/Svg/Svg";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import styles from "./page.module.css";

async function getTodoItem(id) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/todos/records/${id}`,
    { cache: "no-store" }
  );
  const todo = await res.json();
  return todo;
}

const DeleteTodo = async ({ params }) => {
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
      <div className="d-flex justify-content-center align-items-center">
        <Card className={styles.wrapper}>
          <DeletePage
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        </Card>
      </div>
    </>
  );
};

export default DeleteTodo;
