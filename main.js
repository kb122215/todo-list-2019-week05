const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

addButton.addEventListener("click", function () {
  addTask();
});

function addTask() {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const listItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;
  taskText.classList.add("task-text");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = "";

  taskText.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });
}
