
const { addTodo, removeTodo, updateTodo1,render } = require("../controllers/todo.controller");
  const {verifyToken} = require("../middlewares/jwtVerify")
  const todoRouter = (app) => {
    app.post("/todo",verifyToken, addTodo);
    app.get("/todo", render);
    app.delete("/todo/:id",verifyToken, removeTodo);
    app.put("/todo/:id", verifyToken, updateTodo1);
  };
  
  module.exports = {
    todoRouter
  };