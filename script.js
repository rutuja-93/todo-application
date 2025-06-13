const todoInput = document.getElementById("todo-input");
const todosParent = document.getElementById("todos");
const todos = []; // --> state

function addTodo() {
todos.push(todoInput.value);

updateHtml();
}

function deleteTodo(index) {
todos.splice(index, 1);

updateHtml();
}

function updateHtml() {
todosParent.innerHTML = "";
// update html
for (let i = 0; i < todos.length; i++) {
const div = document.createElement("div");
const para = document.createElement("p");
const button = document.createElement("button");

button.setAttribute("onclick", `deleteTodo(${i})`);

button.innerText = "Delete";
para.innerText = todos[i];

div.append(para, button);

todosParent.appendChild(div);
}
}