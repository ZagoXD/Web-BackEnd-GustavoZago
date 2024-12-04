const API_URL = 'http://localhost:3000/tasks';

document.addEventListener('DOMContentLoaded', loadTasks);

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Carregar tasks
async function loadTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();

    taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id}, this.checked)">
        <strong>${task.title}</strong> - ${task.description}
        <button class="edit-btn" onclick="editTask(${task.id}, '${task.title}', '${task.description}')">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
      `;
      taskList.appendChild(li);
    });
  } catch (error) {
    console.error('Error loading tasks:', error);
  }
}

// Add task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    loadTasks(); 
    taskForm.reset(); 
  } catch (error) {
    console.error('Error adding task:', error);
  }
});

// Editar task
async function editTask(id, currentTitle, currentDescription) {
  const newTitle = prompt('Edit Title:', currentTitle);
  const newDescription = prompt('Edit Description:', currentDescription);

  if (newTitle && newDescription) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, description: newDescription }),
      });

      loadTasks(); 
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }
}

// Marcar como completa
async function toggleTask(id, completed) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    });

    loadTasks(); 
  } catch (error) {
    console.error('Error toggling task:', error);
  }
}

// Excluir task
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    loadTasks();
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}
