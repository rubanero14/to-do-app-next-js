// Get todos endpoint
async function getTodos(req, res) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8090/api/collections/todos/records",
      {
        cache: "no-store",
      }
    );

    const data = await response.json();

    res.end(JSON.stringify(data));
  } catch (err) {
    res.end(JSON.stringify(err.message));
  }
}

export default getTodos;
