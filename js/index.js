const tasks = [];

function localFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem("allTasks"));
    if (savedTasks) {
        tasks.push(...savedTasks)
    }
    loadTasks();
}

localFromLocalStorage();

function loadTasks() {
    localStorage.setItem('allTasks', JSON.stringify(tasks));
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        taskContainer.innerHTML += `
                <div class="task">
                <span>${tasks[i]}</span>
                <img src="./images/delete.png" onclick="deleteTasks(${i})" height="30px"  style="cursor: pointer;">
                </div>`;
    }
}

function addTasks() {
    const taskInputElement = document.getElementById('todo-input');
    const task = taskInputElement.value.trim();

    if (task === '') {
        alert('please enter a task');
        return;
    }

    tasks.push(task);
    loadTasks();

    console.log("task array:", tasks)
    taskInputElement.value = '';
}

function deleteTasks(index) {
    tasks.splice(index, 1);
    loadTasks();
}

