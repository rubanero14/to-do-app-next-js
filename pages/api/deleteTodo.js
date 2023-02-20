// Delete todo endpoint
async function deleteTodo(req, res) {
  console.log(req.body);
  try {
    await fetch(
      `http://127.0.0.1:8090/api/collections/todos/records/${req.body.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json("Successfully Deleted!");
  } catch (err) {
    res.end(JSON.stringify(err.message));
  }
}

export default deleteTodo;
