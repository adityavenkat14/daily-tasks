let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, done: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    li.innerHTML = `
      <input type="checkbox" ${task.done ? "checked" : ""} onchange="toggleTask(${index})">
      <span style="margin-left: 8px; ${task.done ? 'text-decoration: line-through; color: gray;' : ''}">${task.text}</span>
      <button onclick="deleteTask(${index})" style="float:right; background-color:red; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

renderTasks();
