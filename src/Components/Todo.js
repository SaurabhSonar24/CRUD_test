import React, { useState, useRef, useEffect } from "react";
const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, item: "cpp" },
        { id: 2, item: "python" }
    ]);
    const [update, setupdate] = useState(1)
    const [edit, setedit] = useState([])
    const [id, setid] = useState(0)
    const todoRef = useRef();
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const updateTodo = id => {
        console.log(id)
        setupdate(0)
        setid(id)


    };
    const update1 = (e) => {

        e.preventDefault();



        const item = todoRef.current.value;
        for (let i = 0; i < todos.length; i++) {
            if (id === todos[i].id) {
                todos[i].item = item;
            }
        }
        setTodos([...todos])
        console.log(todos)
    }

    const addTodo = data => {
        let id = todos.length + 1;
        setTodos([
            ...todos,
            {
                id,
                item: data
            }
        ]);

    };
    const handleNewTodo = e => {
        e.preventDefault();
        const item = todoRef.current;
        addTodo(item.value);
        item.value = "";
    };
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 ">
                    <h2  style={{marginLeft:"400px"}}>Add Todo</h2>
                </div>
            </div>
            {update ?
                <form >
                    <div className="row text-center">
                        <h3>ADD DATA</h3>
                        <div className="col-md-6">
                            <input
                                type="text"
                                autoFocus
                                ref={todoRef}
                                placeholder="Enter a task"
                                className="form-control"
                                data-testid="input"
                                id="input1"
                                style={{marginLeft:"300px"}}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <br/>
                            <button
                                type="submit"
                                onClick={handleNewTodo}
                                className="btn btn-primary"
                                style={{marginLeft:"450px"}}
                            >
                                Add Task
                            </button>
                        </div>
                    </div>
                </form> : <form>
                    <div className="row text-center">
                        <h3>EDIT DATA</h3>
                        <div className="col-md-6">
                            <input
                                type="text"
                                autoFocus
                                ref={todoRef}
                                placeholder="Enter a task"
                                className="form-control"
                                data-testid="input"
                                id="input1"
                                style={{marginLeft:"300px"}}
                            />
                        </div>
                    </div>
                    <div className="row">
                       
                        <div className="col-md-6">
                        <br/>
                            <button
                                type="submit"
                                onClick={update1}
                                className="btn btn-primary"
                                style={{marginLeft:"450px"}}
                            >
                                Edit Task
                            </button>
                        </div>
                    </div>
                </form>
            }
            <br/>
            <br/>
            <div className="row todo-list">
                <div className="col-md-6">
                    
                    
                        <li  >
                    <table className="table" style={{marginLeft:"280px"}}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Task</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody data-testid="todos">
                            {todos.map((todo) =>
                                <tr key={todo.id}>
                                    <th scope="row">{todo.id}</th>
                                    <td><span>{todo.item}</span></td>

                                    <td><button
                                        className="btn btn-danger"
                                        data-testid="delete-button"
                                        onClick={() => removeTodo(todo.id)}
                                    >
                                        Delete
                                    </button>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                        <button
                                            className="btn btn-primary update"
                                            data-testid="update-button"
                                            onClick={() => updateTodo(todo.id)}
                                        >
                                            Update
                                        </button></td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                    </li>

                </div>
            </div>
        </div>
    );
};
export default Todo;