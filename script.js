const todoInput = document.getElementById("todo-input");
const todosContainer = document.getElementById("todos");


let todos = [];


function addTodo() {
  const text = todoInput.value.trim(); 

  if (text !== "") {
    
    todos.push({ text: text, completed: false });
    todoInput.value = ""; 
    showTodos(); 
  }
}


function showTodos() {
  todosContainer.innerHTML = "";

  
  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";

    
    if (todos[i].completed) {
      todoItem.classList.add("completed");
    }

    const para = document.createElement("p");
    para.innerText = todos[i].text;

    
    const markBtn = document.createElement("button");
    markBtn.className="markBtn";
    markBtn.innerText = todos[i].completed ? "Unmark" : "Mark";
    markBtn.onclick = function () {
      todos[i].completed = !todos[i].completed; 
      showTodos();
    };

    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className="deleteBtn";
    deleteBtn.onclick = function () {
      todos.splice(i, 1); 
      showTodos();
    };

    
    todoItem.append(para, markBtn, deleteBtn);
    todosContainer.appendChild(todoItem);
  }
}
