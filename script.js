function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (typeof task.text !== "string") return;

    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    li.innerHTML = `
      ${task.text}
      <button onclick="toggleTask(${index})">
        ${task.done ? "Undo" : "Done"}
      </button>
      <button onclick="deleteTask(${index})" style="margin-left:10px; background-color: red; color: white;">
        Delete
      </button>
    `;

    taskList.appendChild(li);
  });
}
