import React, { useEffect, useState } from "react";
import privateAxios from "../config/privateAxios";
import publicAxios from "../config/publicAxios";
import "./Todo.scss";

export default function TodoList() {
  const [todo, setTodo] = useState({
    nameTodo: "",
  });
  const [allTodo, setAllTodo] = useState([]);
  const handleAddTodo = async () => {
    if (!todo.id) {
      try {
        const response = await privateAxios.post("/todo", todo);
        alert(response.data.message);
        listTodo();
        setTodo({
          nameTodo: "",
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      try {
        const response = await privateAxios.put(`/todo/${todo.id}`, todo);
        listTodo();
        setTodo({
          nameTodo: "",
        });
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    listTodo();
  }, []);

  const listTodo = async () => {
    try {
      const res = await publicAxios.get("/todo");
      setAllTodo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    const confirm = window.confirm("Bạn có muốn xóa?");
    if (confirm) {
      try {
        const res = await privateAxios.delete(`/todo/${id}`);
        console.log(res);
        setAllTodo(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleEdit = async (item) => {
    console.log(item);
    setTodo(item);
  };

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=600)]  h-[100vh]  pt-7">
        <div className="bg-blue-200 w-[500px] m-auto h-[500px]  ">
          <h1 className="text-3xl text-center"> User Manager </h1>
          <div className="input-container mt-6 ">
            <input
              placeholder="Add your task"
              value={todo.nameTodo}
              type="text"
              onChange={(e) => setTodo({ ...todo, nameTodo: e.target.value })}
            />
            <button class="invite-btn" type="button" onClick={handleAddTodo}>
              {todo.id ? "Sua" : "Them"}
            </button>
          </div>

          {allTodo.map((item, index) => {
            return (
              <div key={index} className="pt-5 leading-10 flex">
                <div className="bg-white w-[350px] ml-7 h-[40px] rounded-[3px] pl-4 cursor-pointer">
                  {" "}
                  <p> {item.nameTodo}</p>
                </div>
                <div className=" ml-4 flex justify-between ">
                  <button
                    className="bg-sky-200 w-[40px] rounded-[3px]"
                    onClick={() => handleDelete(item.id)}
                  >
                    Del
                  </button>
                  <button
                    className="bg-green-400 w-[40px] ml-2 rounded-[3px]"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
