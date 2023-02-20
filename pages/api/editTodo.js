// Edit todo endpoint
async function editTodo(req, res) {
  try {
    await fetch(
      `http://127.0.0.1:8090/api/collections/todos/records/${req.body.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: req.body.title,
          description: req.body.description,
        }),
      }
    );

    res.end(JSON.stringify("Successfully edited!"));
  } catch (err) {
    res.end(JSON.stringify(err.message));
  }
}

export default editTodo;
