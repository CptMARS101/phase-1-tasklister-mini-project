document.addEventListener("DOMContentLoaded", () => {
document.addEventListener("submit", function subClick(event) {
  event.preventDefault();
  const taskText = document.querySelector("#new-task-description")
  const taskList = document.querySelector("#tasks")
  const newTask = document.createElement("li");
  newTask.textContent = taskText.value;
  taskList.appendChild(newTask);
}) 
});
