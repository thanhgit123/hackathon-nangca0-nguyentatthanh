const db = require("../config/db.config");
// select ten_cot from ten_bang
async function addTodos(nameTodo) {
  const [result] = await db.execute("insert into todolist (nameTodo) values (?)", [
    nameTodo,
  ]);
  return result;
}
async function renderTodo(nameTodo) {
  const [result] = await db.execute("select * from todolist");
  console.log(result);
  return result;
}
async function deleteTodo(id) {
  const [result] = await db.execute("delete from todolist where id = ?", [id]);
  return result;
}
async function updateTodo(nameTodo, id) {
  const [result] = await db.execute(
    "update todolist set nameTodo = ? where id = ?",    
    [nameTodo, id]
  );
  return result;
}

module.exports = {
  addTodos,
  renderTodo,
  deleteTodo,
  updateTodo,
};
