const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('#todo-list');

const todoInput = todoForm.querySelector('input');
let todos = [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerHTML = newTodo.text;
  button.innerHTML = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
}
function handlebtnClick(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodosObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodosObj);
  paintToDo(newTodosObj);
  saveTodos();
}
todoForm.addEventListener('submit', handlebtnClick);

const saveTodosData = localStorage.getItem('todos');

if (saveTodosData) {
  const parseTodos = JSON.parse(saveTodosData);
  todos = parseTodos;
  parseTodos.forEach(paintToDo);
}
