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
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.padding = "10px";
    li.style.marginBottom = "5px";
    li.style.backgroundColor = "#f0f0f0";

    const left = document.createElement("div");
    left.style.display = "flex";
    left.style.alignItems = "center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.marginLeft = "10px";
    if (task.done) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    }

    left.appendChild(checkbox);
    left.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    li.appendChild(left);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Initial render
renderTasks();
