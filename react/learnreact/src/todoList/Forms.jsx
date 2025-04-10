//Controlled component: when react dictates the value of a component & react dictactes how that value is modified

function Forms({ input, setInput, handleSubmit, isEditing }) {
  return (
    <>
      <form className="m-1 p-4" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">{isEditing ? "Edit Task" : "Add Task"}</button>
      </form>
    </>
  );
}

export default Forms;
