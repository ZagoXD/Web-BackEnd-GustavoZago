document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('change', alterarCompletada);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const span = document.createElement('span');
            span.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.classList.add('remove-btn');

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function alterarCompletada(event) {
        if (event.target.type === 'checkbox') {
            const span = event.target.nextSibling; 
            span.classList.toggle('completed', event.target.checked);
        }
    }

    function removeTask(event) {
        if (event.target.classList.contains('remove-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        }
    }
});
