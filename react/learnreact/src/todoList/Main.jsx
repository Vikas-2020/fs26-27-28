// import "./Todo.css";
import Form from "./Forms.jsx";
import Todos from "./Todos.jsx";
import { useState } from "react";

function Main() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // // pushing input into the tasks array
    // setTasks([...tasks, input]); //tasks.push(input)


    //[    
      // {id:1, task: "Chirag"},
      // {id:2, task: "Vikas"},
      // {id:3, task: "Anushka"},
      // {id:4, task: "Channu"},       
   //]

    if (isEditing) {
      //EDIT EXISITNG TASK

      setTasks(
        tasks.map((existing) =>
          existing.id === idToEdit ? { ...existing, task: input.trim() } : existing
        )
      );

      //RESET
      setIsEditing(false);
      setIdToEdit(null);
    } else {
      //CREATE A NEW TASK
      const obj = { task: input.trim(), id: Date.now() };
      setTasks([...tasks, obj]); //array of objects
    }

    //RESETTING THE INPUT
    setInput("");
  }

  function handleDelete(idToDelete) {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  }

  function handleEdit(idToEdit) {
    const taskToEdit = tasks.find((task) => task.id === idToEdit); //{id:123425235, task: Learn HMTL}
    setInput(taskToEdit.task);
    setIsEditing(true);
    setIdToEdit(idToEdit);
  }

  // console.log(tasks);

  return (
    <>
      <Form
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
      <Todos
        tasks={tasks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default Main;
