// Array onde será salvo as tarefas
let todoItems = [];

// Função que adiciona uma tarefa dentro do array de tarefas
function addTodo(text) {
  // Objeto da tarefa
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  // Enviar tarefa para lista de tarefas
  todoItems.push(todo);
  renderTodo(todo);
  console.log(todoItems);
}

// Buscar elemnto formulario do DOM
const form = document.querySelector('.js-form');

// Lógica do evento do submit do formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // buscar elemento do input do DOM()
  const input = document.querySelector('.js-todo-input');

  // Buscando valor que o usuário digita no input
  const text = input.value.trim();

  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

// Função que renderiza os To-do na tela
function renderTodo(todo) {
  // seleciona onde deve ser incluida os to-dos;
  const list = document.querySelector('.js-todo-list');

  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>${todo.text}</span>`;

  list.append(listItem);
}
