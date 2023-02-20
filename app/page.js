import CreateTodo from "./CreateTodo";
import Todos from "./todos/page";

import styles from "./page.module.css";

async function Page() {
  return (
    <main className={styles.main}>
      <div className="row">
        <div className="col-12">
          <CreateTodo />
        </div>
        <hr className={styles.divider} />
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center">
            <Todos />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
