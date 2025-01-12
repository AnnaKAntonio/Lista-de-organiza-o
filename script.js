// Selecionar os elementos da página
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Adicionar evento ao botão de adicionar
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, insira uma tarefa!');
    return;
  }

  // Criar um novo item na lista
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    ${taskText}
    <button class="deleteBtn">Remover</button>
  `;

  // Adicionar a tarefa na lista
  taskList.appendChild(listItem);

  // Limpar o campo de entrada
  taskInput.value = '';

  // Adicionar funcionalidade de remover à tarefa
  const deleteBtn = listItem.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
  });
});
