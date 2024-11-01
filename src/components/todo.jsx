import React, { useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const [open,setOpen] = useState([])
  const [selected,setSelected] = useState(null)
  const [editVal,setEditval] = useState('')

  const toggle = (id) => {
    setOpen((prev) => prev.includes(id)? prev.filter(elem => elem !== id):[...prev,id])
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let todo = {
        id: Math.floor(Math.random() *10000),
        text:inpVal
    }
    setData([...data,todo])
    setInpVal('')
  }

  const deleteTodo = (id) => {
    console.log(id);
    setData(data.filter(elem => elem.id !== id))
  }
  const edit = (e,id) => {
    e.preventDefault()
    data.map(elem => (
      elem.id == id ? {...InputEvent,text:editVal} : elem
    ))

  }
  return (
    <div style={{ textAlign: "center" }}>
      {data.length > 0 ? data.map((todo) =>
        (
             <div key={todo.id}>
                <p>{todo.text}</p>
                <button onClick={() => setOpen(!open)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                {open && 
                  <form onSubmit={edit}>
                    <input type="text" value={editVal} onChange={(e) => setEditval(e.target.value)} />
                    <button type="submit">Save</button>
                  </form>
                }
             </div>

        )
    )
         : "you have no todos"}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo"
          id="todo"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default List;