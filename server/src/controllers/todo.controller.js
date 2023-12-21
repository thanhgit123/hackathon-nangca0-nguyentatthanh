const { addTodos, renderTodo, updateTodo, deleteTodo } = require("../repository/todo.repository");
  async function addTodo(req, res) {
    const { nameTodo } = req.body;
    await addTodos(nameTodo);
    res.status(201).json({
      message: "Add ok",
    });
  }
  async function render(req, res) {
    const result = await renderTodo();
    res.status(200).json(result);
  }
  async function removeTodo(req, res) {
    const { id } = req.params;
  
    await deleteTodo(id);
    const result = await renderTodo();
    res.status(200).json(result);
  }
  async function updateTodo1(req, res) {
       const { id } = req.params;
       const { nameTodo } = req.body;
       const result = await updateTodo(nameTodo, id);
       console.log(result);
       res.status(200).json(result);
  }
  
  module.exports = {
    addTodo,
    render,
    removeTodo,
    updateTodo1,
  };
  